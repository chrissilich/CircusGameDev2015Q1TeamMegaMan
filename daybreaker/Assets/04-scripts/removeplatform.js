#pragma strict

public var destroyWhat:GameObject;
public var shakeWhat:GameObject;
public var dieNow:GameObject;

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "Player") {
//		if (other.gameObject.rigidbody2D.velocity.y < 0) {
			iTween.ShakePosition(destroyWhat,{
				"x": 0.1,
				"time":2,
				"delay":0,
				"onComplete": "dropPlatform",
				"onCompleteTarget": gameObject,
				"looptype": "none"
			});		
//		}	
	}
}

function dropPlatform () {
 	Destroy(destroyWhat, 0.7);
 	Destroy (dieNow, 0.0);
	iTween.MoveTo(destroyWhat,{
    	"y": -10, 
     	"time":8,
     	"easeType":"easeOutExpo",
        "onComplete": "OnShadeHidden"
    });
}

		



 

 