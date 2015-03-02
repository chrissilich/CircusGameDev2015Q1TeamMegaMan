#pragma strict

public var jumpSpeed:float = 8;
public var acceleration:float = 0.1;
public var maxSpeed:float = 2;

function Start () {

}

function FixedUpdate () {
	var sprite:Transform = this.transform.Find("Sprite") ;
	var animController:Animator = sprite.GetComponent("Animator");
//	Debug.Log(animController);
 
	
	var start = transform.position;
	start.y -= 0.9;
	Debug.DrawRay( start, -Vector2.up * 0.1, Color.red, 1 );
	var grounded:RaycastHit2D = Physics2D.Raycast( start, -Vector2.up, 0.1 );

	
	
	if (grounded.collider) {
		if (Input.GetAxis("Horizontal") == 0) {
			animController.SetInteger("State", 0);
		} else {
			animController.SetInteger("State", 1);
		}	
	} else {
		animController.SetInteger("State", 2);
	}
	
	

	

// Keyboard Controls 

	if (Input.GetAxis("Vertical") > 0 && 
		grounded.collider &&
		grounded.collider.gameObject.tag == "Ground") {
		
		Debug.Log("JUMP");
		animController.SetInteger("State", 1);
		rigidbody2D.velocity.y = jumpSpeed;
	 }	
		


  if (Input.GetAxis("Horizontal") > 0)  { 
   	sprite.transform.localScale = Vector3(0.8, 0.8, 1);
  
  	
	if (rigidbody2D.velocity.x < maxSpeed) {
		rigidbody2D.velocity.x += acceleration;
	} 
  } 
  
  
   if (Input.GetAxis("Horizontal") < 0) { 
   	sprite.transform.localScale = Vector3(-0.8, 0.8, 1);
    
	if (rigidbody2D.velocity.x > -maxSpeed ) {
		rigidbody2D.velocity.x -= acceleration;
	} 	
  }


	
  
// end keyboard controls

}
