var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment =  require("./models/comment");

var data = [
    {
        name: "Tsomoriri Camp – Ladakh",
        image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/Tsomoriri.jpg",
        description:"Tsomoriri Resort and Camps is situated on Tsomoriri Lake (240 Kms from Leh) in the Changthang area at an altitude of 4,595 m (15,080 ft) in Ladakh and is one of the largest of the High Altitude Lakes in the region."
    },
    {
        name: "Camp Exotica – Kullu",
        image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/camp-exotica.jpg",
        description:"Tsomoriri Resort and Camps is situated on Tsomoriri Lake (240 Kms from Leh) in the Changthang area at an altitude of 4,595 m (15,080 ft) in Ladakh and is one of the largest of the High Altitude Lakes in the region."
    },
    {
        name: "Camp Room on the Roof – Dehradun",
        image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/camp-room-on-the-roof.jpg",
        description:"Tsomoriri Resort and Camps is situated on Tsomoriri Lake (240 Kms from Leh) in the Changthang area at an altitude of 4,595 m (15,080 ft) in Ladakh and is one of the largest of the High Altitude Lakes in the region."
    }
    
    
]
 
function seedDB(){
    //Removes campgrounds
    Campground.remove({},function(err){
        if(err)
        console.log(err);
        else
        console.log("removed campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err)
                console.log(err)
                else
                {
                    console.log("added a campground!");
                    Comment.create({
                        text: "I wish i could camp here!!",
                        author: "Some pilgrimage"         
                    },function(err,comment){
                        if(err)
                        console.log(err)
                        else
                        { 
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment!!");
                        }
                    });
                }
                
            });
          });
       });
    
}

module.exports = seedDB;