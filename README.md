### `To start the app you should run next scripts:`

### `npm start` in the folder "API"

Runs node server on the port 4000. If your port 4000 is already occupied you can change port from the file /API/index.js

### `npm start` in the folder"frontend"

Runs the app in the development mode.\
Open (http://localhost:3000) to view it in your browser.

### `Application description:`

Accepted coin denominations :
1¢, 2¢, 5¢, 10¢, 25¢, 50¢, 1$, 2$.
The 5$ is added only to display an error about an unsupported denomination.

When the user enters $5, the error is displayed and the $5 is added to the "Your Change" section.
The "Your change" section can be cleared by clicking on it.

To buy any item, the user must first add money, then insert the item number and press OK or Enter on the keyboard.
After that, the quantity of the selected item will decrease by one, and a message will appear at the bottom of the vending machine that the user can get his/her item. User can click on it, after which the message will change to "Nothing to receive". If the quantity is zero, an error appears. If the quantity is insufficient, an error appears.

The user can get their money back by clicking on the "Reset" button. The money is moved to the "Your change" section.
