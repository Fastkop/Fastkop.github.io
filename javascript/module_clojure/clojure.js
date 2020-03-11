var timer = null;
var rudyTimer = (function () {
	//part 1
    if (timer == null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
    function rudy() {
        document.getElementById("output").innerHTML += " Rudy!";
    }
});
var accountModule = (function () {
	//part2
    var accountName = "";
    var deposit = 1;
    function getDeposit() {
        return deposit;
    }

    function getName() {
        return accountName;
    }

    return {
        createAccount: function (accountName, deposit) {
            this.accountName = accountName;
            this.deposit = deposit;
        },
        print : function(){
            return "Account name : " + this.accountName + "    Balance : " + this.deposit;
        }
    };
});


window.onload = function () {
	//initalize
    var form = document.getElementById("form");
    var textArea = document.getElementById("textArea");
    var accounts = [];
    var addAcc;
    form.onsubmit = submit;
    function submit() {
        var name = document.getElementById("accountName").value;
        var balance = document.getElementById("deposit").value;
        addAcc = accountModule();
        addAcc.createAccount(name , balance);
        accounts.push(addAcc);
        var showAccs = "";
        for (var i = 0; i < accounts.length; i++) {
            showAccs += accounts[i].print() + "\n";
        }
        textArea.value = showAccs;
        form.reset();
        return false;
    }
};
