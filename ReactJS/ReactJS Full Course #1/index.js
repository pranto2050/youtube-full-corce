



const element1 = React.createElement(
    'h1',
    {
        style: {backgroundColor: "orange", color: "black", fontSize: "30px"},
        id: "first",
        className: "ele1"
    },
    "Hello Coder Army"
);



ReactDOM.render(element1, document.getElementById('root'));
