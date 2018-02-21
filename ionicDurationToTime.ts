/**
 * 
 * A simple typescript class with a method that converts decimals such as 5.5 to 5:50, 3.30 to 3:30, etc, 
 * so that the Ionic Date Time component can read and display it in a hour and minute format.
 * 
 */

export class ionicDurationToTime
{
    hourFormat ( decimalTime )
    {
        if ( decimalTime < 10 && decimalTime.substr( 1, 1 ) != "." )
            decimalTime = "0" + decimalTime.substr( 0, 1 ) + ":00";

        if ( decimalTime >= 10 && decimalTime.substr( 2, 2 ).substr( 0, 1 ) != "." )
            decimalTime = decimalTime.substr( 0, 2 ).toString() + ":00";

        if (
            decimalTime < 10 &&
            decimalTime.substr( 2, 2 ).substr( 0, 1 ) >= 1 &&
            decimalTime.substr( 2, 2 ).substr( 1, 2 ) < 1
        )
            decimalTime =
                "0" +
                decimalTime.substr( 0, 1 ).toString() +
                ":" +
                decimalTime
                    .substr( 2, 2 )
                    .substr( 0, 1 )
                    .toString() +
                "0";

        if (
            decimalTime < 10 &&
            decimalTime.substr( 2, 2 ).substr( 0, 1 ) >= 1 &&
            decimalTime.substr( 2, 2 ).substr( 1, 2 ) >= 1
        )
            decimalTime =
                "0" +
                decimalTime.substr( 0, 1 ).toString() +
                ":" +
                decimalTime
                    .substr( 2, 2 )
                    .substr( 0, 2 )
                    .toString();

        if (
            decimalTime >= 10 &&
            decimalTime.substr( 3, 3 ).substr( 0, 1 ) >= 1 &&
            decimalTime.substr( 4, 4 ).substr( 0, 1 ) < 1
        )
            decimalTime =
                decimalTime.substr( 0, 2 ).toString() +
                ":" +
                decimalTime
                    .substr( 3, 3 )
                    .substr( 0, 1 )
                    .toString() +
                "0";

        if (
            decimalTime >= 10 &&
            decimalTime.substr( 3, 3 ).substr( 0, 1 ) >= 1 &&
            decimalTime.substr( 4, 4 ).substr( 0, 1 ) >= 1
        )
            decimalTime =
                decimalTime.substr( 0, 2 ).toString() +
                ":" +
                decimalTime
                    .substr( 3, 4 )
                    .substr( 0, 2 )
                    .toString();

        if (
            decimalTime >= 10 &&
            decimalTime.substr( 3, 3 ).substr( 0, 1 ) < 1 &&
            decimalTime.substr( 4, 4 ).substr( 0, 1 ) >= 1
        )
            decimalTime =
                decimalTime.substr( 0, 2 ).toString() +
                ":" +
                decimalTime
                    .substr( 3, 4 )
                    .substr( 0, 2 )
                    .toString();

        if (
            decimalTime < 10 &&
            decimalTime.substr( 2, 2 ).substr( 0, 1 ) < 1 &&
            decimalTime.substr( 2, 2 ).substr( 1, 2 ) >= 1
        )
            decimalTime =
                "0" +
                decimalTime.substr( 0, 1 ).toString() +
                ":" +
                decimalTime
                    .substr( 2, 2 )
                    .substr( 0, 2 )
                    .toString();
        return decimalTime.toString();
    }
}