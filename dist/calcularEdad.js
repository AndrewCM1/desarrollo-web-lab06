function calcularEdad (birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date-getTime ();
    var ageDate = new Date (ageDifMs);
    return Math. abs (ageDate. getUTCFullYear () - 1970);

}
    var age = calcularEdad("30/01/2003");
    console. log("Tienes" + age + " años");