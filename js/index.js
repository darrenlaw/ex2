window.onload = function () {
    //check that js is working
    console.log("reading");

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = resetPage;

    //define process function
    function processForm() {

        //store user name in a variable
        var userName = document.f.userName.value;
        //store user gender in a variable
        var userGender = document.f.userGender.value;
        //store user class in a variable
        var userClass = document.f.userClass.value;
        //store user city in a variable
        var userCity = document.f.userCity.value;
        //store user year born in a variable
        var birthYear = document.f.birthYear.value;
        //store user year month in a variable
        var birthMonth = document.f.birthMonth.value;
        //store user animal in a variable
        var animal = document.f.animal.value;
        //store user monster in a variable
        var monster = document.f.monster.value;



        //error detection
        if (userName == "" || userGender == "" || userClass == "" || userCity == "" || birthYear == "" || birthMonth == "" || animal == "" || monster == "") {
            alert("Please finish the form!");

        } else {

            //capture the msg element to change it's text and html
            var myMsg = document.getElementById("myMsg");


            myMsg.innerHTML = "You, " + userName + ", born in " + birthMonth + " of the year " + birthYear + ", have been chosen as the hero that will serve to protect our Goddess from the forces that want to corrupt and control our world. You have been blessed with the powers of the " + userClass + "." + " We have taken you from " + userCity + " to come and protect us from the army of " + monster + " that serve the forces of evil. We have recruited the " + animal + " population as guides for your mission. Please, help us.";
            myMsg.className = "show";

    var showClass = document.getElementById("showImg");
                var classImg = document.createElement("img");
                classImg.onload = function () {
                    showClass.appendChild(classImg);
                }
                
        if (userClass == "Mage" || userClass == "mage") {
                classImg.src = "images/mage.png";}
        if (userClass == "Archer" || userClass == "archer") {
                classImg.src = "images/archer.png";}
        if (userClass == "Warrior" || userClass == "warrior") {
                classImg.src = "images/warrior.png";}
        if (userClass == "Rogue" || userClass == "rogue") {
                classImg.src = "images/rogue.png";}
            }



        //prevent page from reloading
        return false;
    }

    //if user chooses "reset"
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        //change the class name
        myMsg.className = "hide";
        //reset the userName field
        userName.value = "";
        //reset the userCity field
        userCity.value = "";
        
        
        return false;
    }


}