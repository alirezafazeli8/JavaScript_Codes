function cal_obj (num1, num2) {
    const sum = {
        "jam" : num1 + num2,
        "tafrigh": num1 - num2,
        "zarb": num1 * num2,
        "taghsim": num1 / num2,
        "bakhsh_paziri": num1 % num2
    };

    let show_sum = `
        + = ${sum.jam}
        - = ${sum.tafrigh}
        * = ${sum.zarb}
        / = ${sum.taghsim}
        % = ${sum.bakhsh_paziri}
    `;

    return console.log(show_sum);
}


cal_obj(200, 20124);