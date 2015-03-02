#pragma strict

public var destroyWhat:GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log("collision");
	
	if (other.gameObject.tag == "Player") {
		Debug.Log("hit by player");
		
		Debug.Log(other.gameObject.rigidbody2D.velocity.y);
		if (other.gameObject.rigidbody2D.velocity.y < -4) {
			Debug.Log("break");
			Destroy(destroyWhat, 0.5);
		}
	}
}
