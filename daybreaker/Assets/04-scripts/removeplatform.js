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
			//iTween.MoveTo(destroyWhat,{
			//	"x": other.gameObject.position.x + 3,
			//	"time":4,
			//	"delay":1,
			//	"onupdate": "myUpdateFunction",
			//	"looptype": "pingpong"
			//});	
			
			iTween.ShakePosition(destroyWhat,{
				"x": 0.1,
				"time":2,
				"delay":0,
				"onComplete": "dropPlatform",
				"onCompleteTarget": gameObject,
				"looptype": "none"
			});	
			
		
//			iTween.ShakePosition(destroyWhat, Vector3(0.1, 0, 0), 2f);
//			Destroy(destroyWhat, 2);
		}
		
		
	}
	
	
}


	function dropPlatform () {
	Debug.Log("drop");
		iTween.MoveTo(destroyWhat,{
     		"y": -3, 
     		"time":3,
            "onComplete": "OnShadeHidden"
         });
    	 Destroy(destroyWhat, 0.7);
   }

		



 

 