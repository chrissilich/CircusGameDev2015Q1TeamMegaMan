#pragma strict

public var teleportTo: GameObject;

function Start () {

}

function Update () {


	//if (transform.position.y < -5) {
	//	rigidbody2D.velocity.x = 0;
	//	transform.position.x = -68.66307;
	//	transform.position.y = 2;		
	//	Application.LoadLevel("level 1");
	//}

}



function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log("collision");
	if (other.gameObject.tag == "Player") {
		Debug.Log("collision with player");
		other.gameObject.rigidbody2D.velocity.x = 0;
		other.gameObject.rigidbody2D.velocity.y = 0;
		other.gameObject.transform.position = teleportTo.transform.position;	
		//Application.LoadLevel("level 1");
	}
}