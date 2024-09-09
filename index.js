function accountManager() {
    let remainder = 0;

    while (true) {
        let action = prompt("Choose an action: Deposit, Withdraw, Check remainder, or Exit");

        if (action === null) {
            console.log("Action needed");
            continue;
        }

        action = action.toLowerCase().trim();

        if (action === "deposit") {
            let amount = parseFloat(prompt("Enter Amount to deposit"));
            if (isNaN(amount) || amount <= 0) {
                console.log("Invalid amount");
            } else {
                remainder += amount;
                console.log(`Deposited $${amount}. Remainder: $${remainder}`);
            }
        } else if (action === "withdraw") {
            let amount = parseFloat(prompt("Enter Amount to withdraw"));
            if (isNaN(amount) || amount <= 0) {
                console.log("Invalid amount");
            } else if (amount > remainder) {
                console.log("Insufficient funds");
            } else {
                remainder -= amount;
                console.log(`Withdrew $${amount}. New remainder: $${remainder}`);
            }
        } else if (action === "check remainder") {
            console.log(`Your remainder is: $${remainder}`);
        } else if (action === "exit") {
            console.log("Exiting the program");
            break;
        } else {
            console.log("Invalid action.");
        }
    }
}

accountManager();



