
var btn = false;
function myFunction() {
    if (btn == false) {
        btn = true;
        document.getElementById("demo").innerHTML = "The file Bank.xls contains data on 5000 customers. The data include customer demographic information (age, income, etc.), the customer's relationship with the bank (mortgage, securities account, etc.), and the customer response to the last personal loan campaign (Personal Loan). Among these 5000 customers, only 480 (= 9.6%) accepted the personal loan that was offered to them in the earlier campaign."
    }
    else {
        btn = false;
        document.getElementById("demo").innerHTML = ""


    }
}

var btn1 = false;
function model() {
    if (btn1 == false) {
        btn1 = true;
        document.getElementById("demo2").innerHTML = "The given data is trained on different classification models like logistic regression, KNN Classifier,SVM, Decision Tree, Random forest, Bagged Decision Tree (Bagging),Gradient Boosting (Boosting), Voting Classifier"
        document.getElementById("demo2").innerHTML+= "Among all Bagged Decision Tree (Bagging) is performing well whose performance metrics are shown below."
        document.getElementById("demo2").innerHTML+="<ul><li>train_accuracy_score = 0.998000</li><li>test_accuracy_score =0.982000</li><li>precession =0.968000</li><li>Recall =0.840278</li><li>F1_score =0.899628</li></ul>"
    }
    else {
        btn1 = false;
        document.getElementById("demo2").innerHTML = ""


    }
}

var btn2=false;
function Openform()
{
    if(btn2==false){
        btn2=true;
        document.getElementById("form1").style.display="";

    }
    else{
        btn2=false;
        document.getElementById("form1").style.display="none";
    }

}



