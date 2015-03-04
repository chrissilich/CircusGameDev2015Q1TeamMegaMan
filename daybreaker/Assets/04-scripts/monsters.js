#pragma strict

public var killWhat:GameObject;
public var moveWhat:GameObject;

function Start () {

//	, Vector3(4, 0, 0), 2f, pingPong);
	
	
	iTween.MoveBy(moveWhat,{
		"x":2,
		"time":2,
		"delay":0,
		"onupdate": "myUpdateFunction",
		"looptype": "pingPong"
	});	
}

function Update () {

	


}



function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log("collision");
	
	if (other.gameObject.tag == "Player") {
		Debug.Log("hit by player");
		
		Debug.Log(other.gameObject.rigidbody2D.velocity.y);
		
		if (other.gameObject.rigidbody2D.velocity.y < -1) {
			Debug.Log("break");
			
			Destroy(killWhat, 0);
		}
	}
}
