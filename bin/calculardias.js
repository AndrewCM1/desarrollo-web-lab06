function calculardias (){
    let hoy = new Date();
    let navidad = hoy. getFullYear();
    if (hoy.getMonth () == 11 && hoy.getDate() > 25) {
    navidad = navidad + 1;
    }
    let christmasDate = new Date (navidad, 11, 25);
    let dayMilliseconds = 1000 * 60 * 60 * 24;
    let remainingDays = Math.ceil(
    (christmasDate.getTime () - hoy .getTime ()) /
    (dayMilliseconds)
    );
    console. log ("Faltan " + remainingDays + " dias para navidad")
    }