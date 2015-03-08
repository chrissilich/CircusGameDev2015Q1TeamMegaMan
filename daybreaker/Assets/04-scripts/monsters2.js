#pragma strict

public var killWhat:GameObject;
public var moveWhat:GameObject;

function Update () {

	iTween.MoveBy(moveWhat,{
		"x":-2,
		"time":2, 	
		"delay":0,
		"onupdate": "myUpdateFunction",
		"looptype": "pingPong"
	});	
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "Player") {
		if (other.gameObject.rigidbody2D.velocity.y < -1) {
			Destroy(killWhat, 0);
		}
	}
}


function FixedUpdate () {
	var sprite:Transform = this.transform.Find("Sprite") ;
	var animController:Animator = sprite.GetComponent("Animator");
	var start = transform.position;
	start.y -= 0.9;
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
	
}