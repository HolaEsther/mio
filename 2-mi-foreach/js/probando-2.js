

/////////////////////  de TELONERA PERSIANA ///////////////////////////////////////////////////////77


document.addEventListener("DOMContentLoaded", function(){
    var divs = document.querySelectorAll("#grande>div"); 
    divs.forEach(function(div){ 
        div.style.animation = "persiana 2.5s ease-in forwards"; 
    });
});



//////////////////////////////////  PROMT para VAVERIGUAR SIGNO   /////////////////////////77///////////////////////////////////777777


//  var fecha = prompt("Ingresa tu fecha de nacimiento en formato DD/MM/AA:");



let vea=document.getElementById('vea');
let suSignoEs=document.getElementById('su-signo-es');
let cajaBusca=document.getElementById('caja-busca');
let escribeAqui=document.getElementById('escribe-aqui');
let dondeEscribir=document.getElementById('donde-escribir');
let btnVerSuSigno=document.getElementById('btn-ver-su-signo');

// Continúa con el resto de los signos chinos según los tramos de tiempo

function verificarSigno() {

    let sufecha = dondeEscribir.value;

    let partesFecha = sufecha.split('/');
    let dia = parseInt(partesFecha[0]);
    let mes = parseInt(partesFecha[1]);
    let año = parseInt(partesFecha[2]);

    if ( (dia >= 2 && mes === 2 && año === 1927) || (dia <=31 && mes <=12 && año === 1927) || (dia <= 22 && mes === 1 && año === 1928) ||
    (dia >= 19 && mes >= 2 && año === 1939) || (dia <= 31 && mes <=12 && año === 1939) || (dia <= 12 && mes <= 2 && año === 1940) ||
    (dia >= 6 && mes >= 2 && año === 1951) || (dia <= 31 && mes <=12 && año === 1951) || (dia <= 26 && mes <= 1 && año === 1952) ||
    (dia >= 25 && mes >= 1 && año === 1963) || (dia <= 31 && mes <=12 && año === 1963) || (dia <= 12 && mes <= 2 && año === 1964) ||
    (dia >= 11 && mes >= 2 && año === 1975) || (dia <= 31 && mes <=12 && año === 1975) || (dia <= 30 && mes <= 1 && año === 1976) ||
    (dia >= 29 && mes >= 1 && año === 1987) || (dia <= 31 && mes <=12 && año === 1987) || (dia <= 16 && mes <= 2 && año === 1988) ||
    (dia >= 16 && mes >= 2 && año === 1999) || (dia <= 31 && mes <=12 && año === 1999) || (dia <= 31 && mes <= 1 && año === 2000) ||
    (dia >= 3 && mes >= 2 && año === 2011) || (dia <= 31 && mes <=12 && año === 2011) || (dia <= 22 && mes <= 1 && año === 2012) ||
    (dia >= 22 && mes >= 1 && año === 2023) || (dia <= 31 && mes <=12 && año === 2023) || (dia <= 9 && mes <= 2 && año === 2024))
    {
        suSignoEs.innerHTML='Conejo';     
    }
    else if ((dia >= 22 && mes === 1 && año === 1928) || (dia <= 31 && mes <=12 && año === 1928) || (dia <= 9 && mes === 2 && año === 1929) ||
    (dia >= 8 && mes >= 2 && año === 1940) || (dia <= 31 && mes <=12 && año === 1940) || (dia <= 26 && mes <= 1 && año === 1941) ||
    (dia >= 27 && mes >= 1 && año === 1952) || (dia <= 31 && mes <=12 && año === 1952) || (dia <= 13 && mes <= 2 && año === 1953) ||
    (dia >= 13 && mes >= 2 && año === 1964) || (dia <= 31 && mes <=12 && año === 1964) || (dia <= 1 && mes <= 2 && año === 1965) ||
    (dia >= 31 && mes >= 1 && año === 1976) || (dia <= 31 && mes <=12 && año === 1976) || (dia <= 17 && mes <= 2 && año === 1977) ||
    (dia >= 17 && mes >= 2 && año === 1988) || (dia <= 31 && mes <=12 && año === 1988) || (dia <= 5 && mes <= 2 && año === 1989) ||
    (dia >= 5 && mes >= 2 && año === 2000) || (dia <= 31 && mes <=12 && año === 2000) || (dia <= 23 && mes <= 1 && año === 2001) ||
    (dia >= 23 && mes >= 2 && año === 2012) || (dia <= 31 && mes <=12 && año === 2012) || (dia <= 9 && mes <= 2 && año === 2013) ||
    (dia >= 10 && mes >= 2 && año === 2024) || (dia <= 31 && mes <=12 && año === 2024) || (dia <= 28 && mes <= 1 && año === 2025))
    {
        suSignoEs.innerHTML='Dragón';
    } 

else if ((dia >= 10 && mes >= 2 && año === 1929)  || (dia <= 31 && mes <=12 && año === 1929) || (dia <= 29 && mes <= 1 && año === 1930) ||
    (dia >= 27 && mes >= 1 && año === 1941) || (dia <= 31 && mes <=12 && año === 1941) || (dia <= 14 && mes <= 2 && año === 1942) ||
    (dia >= 14 && mes >= 2 && año === 1953) || (dia <= 31 && mes <=12 && año === 1953) || (dia <= 2 && mes <= 2 && año === 1954) ||
    (dia >= 2 && mes >= 2 && año === 1965) || (dia <= 31 && mes <=12 && año === 1965) || (dia <= 20 && mes <= 1 && año === 1966) ||
    (dia >= 18 && mes >= 2 && año === 1977) || (dia <= 31 && mes <=12 && año === 1977) || (dia <= 6 && mes <= 2 && año === 1978) ||
    (dia >= 6 && mes >= 2 && año === 1989) || (dia <= 31 && mes <=12 && año === 1989) || (dia <= 26 && mes <= 1 && año === 1990) ||
    (dia >= 24 && mes >= 1 && año === 2001) || (dia <= 31 && mes <=12 && año === 2001) || (dia <= 11 && mes <= 2 && año === 2002) ||
    (dia >= 13 && mes >= 2 && año === 2013) || (dia <= 31 && mes <=12 && año === 2013) || (dia <= 30 && mes <= 1 && año === 2014))   
    {
        suSignoEs.innerHTML='Serpiente';
    } 
else if ((dia >= 30 && mes >= 1 && año === 1930) || (dia <= 31 && mes <=12 && año === 1930) || (dia <= 16 && mes <= 2 && año === 1931) ||
    (dia >= 15 && mes >= 2 && año === 1942) || (dia <= 31 && mes <=12 && año === 1942) || (dia <= 4 && mes <= 2 && año === 1943) ||    
    (dia >= 3 && mes >= 2 && año === 1954) || (dia <= 31 && mes <=12 && año === 1954) || (dia <= 23 && mes <= 1 && año === 1955) || 
    (dia >= 21 && mes >= 1 && año === 1966) || (dia <= 31 && mes <=12 && año === 1966) || (dia <= 8 && mes <= 2 && año === 1967) ||
    (dia >= 7 && mes >= 2 && año === 1978) || (dia <= 31 && mes <=12 && año === 1978) || (dia <= 27 && mes <= 1 && año === 1979) || 
    (dia >= 27 && mes >= 1 && año === 1990) || (dia <= 31 && mes <=12 && año === 1990) || (dia <= 14 && mes <= 2 && año === 1991) ||
    (dia >= 12 && mes >= 2 && año === 2002) || (dia <= 31 && mes <=12 && año === 2002) || (dia <= 31 && mes <= 1 && año === 2003) || 
    (dia >= 31 && mes >= 1 && año === 2014) || (dia <= 31 && mes <=12 && año === 2014) || (dia <= 18 && mes <= 2 && año === 2015))
    {
        suSignoEs.innerHTML='Caballo';
    }    
 else if ((dia >= 17 && mes >= 2 && año === 1931) || (dia <= 31 && mes <=12 && año === 1931) || (dia <= 5 && mes <= 2 && año === 1932) ||
    (dia >= 5 && mes >= 2 && año === 1943) || (dia <= 31 && mes <=12 && año === 1943) || (dia <= 24 && mes <= 1 && año === 1944) ||
    (dia >= 24 && mes >= 1 && año === 1955) || (dia <= 31 && mes <=12 && año === 1955) || (dia <= 11 && mes <= 2 && año === 1956) ||
    (dia >= 9 && mes >= 2 && año === 1967) || (dia <= 31 && mes <=12 && año === 1967) || (dia <= 29 && mes <= 2 && año === 1968) ||
    (dia >= 28 && mes >= 1 && año === 1979) || (dia <= 31 && mes <=12 && año === 1979) || (dia <= 15 && mes <= 2 && año === 1980) ||
    (dia >= 15 && mes >= 2 && año === 1991) || (dia <= 31 && mes <=12 && año === 1991) || (dia <= 3 && mes <= 2 && año === 1992) ||
    (dia >= 1 && mes >= 2 && año === 2003) || (dia <= 31 && mes <=12 && año === 2003) || (dia <= 21 && mes <= 1 && año === 2004) ||
    (dia >= 19 && mes >= 2 && año === 2015) || (dia <= 31 && mes <=12 && año === 2015) || (dia <= 7 && mes <= 2 && año === 2016))
    {
        suSignoEs.innerHTML='Cabra';
    }       
else if ((dia >= 6 && mes >= 2 && año === 1932) || (dia <= 31 && mes <=12 && año === 1932) || (dia <= 25 && mes <= 1 && año === 1933) ||
    (dia >= 25 && mes >= 1 && año === 1944) || (dia <= 31 && mes <=12 && año === 1944) || (dia <= 12 && mes <= 2 && año === 1945) || 
    (dia >= 12 && mes >= 2 && año === 1956) || (dia <= 31 && mes <=12 && año === 1956) || (dia <= 30 && mes <= 1 && año === 1957) ||
    (dia >= 30 && mes >= 1 && año === 1968) || (dia <= 31 && mes <=12 && año === 1968) || (dia <= 16 && mes <= 2 && año === 1969) ||
    (dia >= 16 && mes >= 2 && año === 1980) || (dia <= 31 && mes <=12 && año === 1980) || (dia <= 4 && mes <= 2 && año === 1981) ||
    (dia >= 4 && mes >= 2 && año === 1992) || (dia <= 31 && mes <=12 && año === 1992) || (dia <= 22 && mes <= 1 && año === 1993) ||
    (dia >= 22 && mes >= 1 && año === 2004) || (dia <= 31 && mes <=12 && año === 2004) || (dia <= 8 && mes <= 2 && año === 2005) ||
    (dia >= 8 && mes >= 2 && año === 2016) || (dia <= 31 && mes <=12 && año === 2016) || (dia <= 27 && mes <= 1 && año === 2017))
    { 
        suSignoEs.innerHTML='Mono';
    }     
else if ((dia >= 26 && mes === 1 && año === 1933) || (dia <= 31 && mes <=12 && año === 1933) || (dia <= 13 && mes === 2 && año === 1934) ||
    (dia >= 13 && mes >= 2 && año === 1945) || (dia <= 31 && mes <=12 && año === 1945) || (dia <= 1 && mes <= 2 && año === 1946) ||
    (dia >= 31 && mes >= 1 && año === 1957) || (dia <= 31 && mes <=12 && año === 1957) || (dia <= 17 && mes <= 2 && año === 1958) ||
    (dia >= 17 && mes >= 2 && año === 1969) || (dia <= 31 && mes <=12 && año === 1969) || (dia <= 5 && mes <= 2 && año === 1970) ||
    (dia >= 5 && mes >= 2 && año === 1981) || (dia <= 31 && mes <=12 && año === 1981) || (dia <= 24 && mes <= 1 && año === 1982) ||
    (dia >= 23 && mes >= 1 && año === 1993) || (dia <= 31 && mes <=12 && año === 1993) || (dia <= 9 && mes <= 2 && año === 1994) ||
    (dia >= 9 && mes >= 2 && año === 2005) || (dia <= 31 && mes <=12 && año === 2005) || (dia <= 28 && mes <= 1 && año === 2006) ||
    (dia >= 28 && mes >= 1 && año === 2017) || (dia <= 31 && mes <=12 && año === 2017) || (dia <= 15 && mes <= 2 && año === 2018))
{
        suSignoEs.innerHTML='Gallo';
}
else if ((dia >= 14 && mes >= 2 && año === 1934) || (dia <= 31 && mes <=12 && año === 1934) || (dia <= 3 && mes <= 2 && año === 1935) ||
(dia >= 2 && mes >= 2 && año === 1946) || (dia <= 31 && mes <=12 && año === 1946) || (dia <= 21 && mes <= 1 && año === 1947) ||
(dia >= 18 && mes >= 2 && año === 1958) || (dia <= 31 && mes <=12 && año === 1958) || (dia <= 7 && mes <= 2&& año === 1959) ||
(dia >= 6 && mes >= 2 && año === 1970) || (dia <= 31 && mes <=12 && año === 1970) || (dia <= 26 && mes <= 1 && año === 1913) ||
(dia >= 25 && mes >= 1 && año === 1982) || (dia <= 31 && mes <=12 && año === 1982) || (dia <= 12 && mes <= 2 && año === 1983) ||
(dia >= 10 && mes >= 2 && año === 1994) || (dia <= 31 && mes <=12 && año === 1994) || (dia <= 30 && mes <= 1 && año === 1995) ||
(dia >= 29 && mes >= 1 && año === 2006) || (dia <= 31 && mes <=12 && año === 2006) || (dia <= 17 && mes <= 2 && año === 2007) ||
(dia >= 16 && mes >= 2 && año === 2018) || (dia <= 31 && mes <=12 && año === 2018) || (dia <= 4 && mes <= 2 && año === 2019))
    {
        suSignoEs.innerHTML='Perro';
    }
else if ((dia >= 4 && mes >= 2 && año === 1935) || (dia <= 31 && mes <=12 && año === 1935) || (dia <= 23 && mes <= 1 && año === 1936) ||
    (dia >= 22 && mes >= 1 && año === 1947) || (dia <= 31 && mes <=12 && año === 1947) || (dia <= 9 && mes <= 2 && año === 1948) ||
    (dia >= 8 && mes >= 2 && año === 1959) || (dia <= 31 && mes <=12 && año === 1959) || (dia <= 27 && mes <= 1 && año === 1960) ||
    (dia >= 27 && mes >= 1 && año === 1971) || (dia <= 31 && mes <=12 && año === 1971) || (dia <= 14 && mes <= 21 && año === 1972) ||
    (dia >= 13 && mes >= 2 && año === 1983) || (dia <= 31 && mes <=12 && año === 1983) || (dia <= 1 && mes <= 2 && año === 1984) ||
    (dia >= 31 && mes >= 1 && año === 1995) || (dia <= 31 && mes <=12 && año === 1995) || (dia <= 18 && mes <= 2 && año === 1996) ||
    (dia >= 18 && mes >= 2 && año === 2007) || (dia <= 31 && mes <=12 && año === 2007) || (dia <= 6 && mes <= 2 && año === 2008) ||
    (dia >= 5 && mes >= 2 && año === 2019) || (dia <= 31 && mes <=12 && año === 2019) || (dia <= 24 && mes <= 1 && año === 2020))
    {
        suSignoEs.innerHTML='Cerdo';
    }
else if ((dia >= 24 && mes >= 1 && año === 1936) || (dia <= 31 && mes <=12 && año === 1936) || (dia <= 10 && mes <= 2 && año === 1937) ||
    (dia >= 10 && mes >= 2 && año === 1948) || (dia <= 31 && mes <=12 && año === 1948) || (dia <= 28 && mes <= 1 && año === 1949) ||
    (dia >= 28 && mes >= 1 && año === 1960) || (dia <= 31 && mes <=12 && año === 1960) || (dia <= 14 && mes <= 2 && año === 1961) ||
    (dia >= 15 && mes >= 2 && año === 1972) || (dia <= 31 && mes <=12 && año === 1972) || (dia <= 2 && mes <= 2 && año === 1973) ||
    (dia >= 2 && mes >= 2 && año === 1984) || (dia <= 31 && mes <=12 && año === 1984) || (dia <= 19 && mes <= 2 && año === 1985) ||
    (dia >= 19 && mes >= 2 && año === 1996) || (dia <= 31 && mes <=12 && año === 1996) || (dia <= 6 && mes <= 2 && año === 1997) ||
    (dia >= 7 && mes >= 2 && año === 2008) || (dia <= 31 && mes <=12 && año === 2008) || (dia <= 25 && mes <= 1 && año === 2009) ||
    (dia >= 25 && mes >= 1 && año === 2020) || (dia <= 31 && mes <=12 && año === 2020) || (dia <= 11 && mes <= 2 && año === 2021))
        {
            suSignoEs.innerHTML='Rata';
        } 
 
 else if ((dia >= 11 && mes >= 2 && año === 1937) || (dia <= 31 && mes <=12 && año === 1937) || (dia <= 30 && mes <= 1 && año === 1938) ||
    (dia >= 29 && mes >= 1 && año === 1949) || (dia <= 31 && mes <=12 && año === 1949) || (dia <= 16 && mes <= 2 && año === 1950) ||
    (dia >= 15 && mes >= 2 && año === 1961) || (dia <= 31 && mes <=12 && año === 1961) || (dia <= 4 && mes <= 2 && año === 1962) ||
    (dia >= 3 && mes >= 2 && año === 1973) || (dia <= 31 && mes <=12 && año === 1973) || (dia <= 22 && mes <= 1 && año === 1974) ||
    (dia >= 20 && mes >= 2 && año === 1985) || (dia <= 31 && mes <=12 && año === 1985) || (dia <= 8 && mes <= 2 && año === 1986) ||
    (dia >= 7 && mes >= 2 && año === 1997) || (dia <= 31 && mes <=12 && año === 1997) || (dia <= 27 && mes <= 12 && año === 1998) ||
    (dia >= 26 && mes >= 1 && año === 2009) || (dia <= 31 && mes <=12 && año === 2009) || (dia <= 13 && mes <= 2 && año === 2010) ||
    (dia >= 12 && mes >= 2 && año === 2021) || (dia <= 31 && mes <=12 && año === 2021) || (dia <= 31 && mes <= 1 && año === 2022))
    {
        suSignoEs.innerHTML='Buey';
    }        
else if ((dia >= 31 && mes >= 1 && año === 1938) || (dia <= 31 && mes <=12 && año === 1938) || (dia <= 18 && mes <= 2 && año === 1939) ||
    (dia >= 17 && mes >= 2 && año === 1950) || (dia <= 31 && mes <=12 && año === 1950) || (dia <= 5 && mes <= 2 && año === 1951) ||
    (dia >= 5 && mes >= 2 && año === 1962) || (dia <= 31 && mes <=12 && año === 1962) || (dia <= 24 && mes <= 1 && año === 1963) ||
    (dia >= 23 && mes >= 1 && año === 1974) || (dia <= 31 && mes <=12 && año === 1974) || (dia <= 10 && mes <= 2 && año === 1975) ||
    (dia >= 9 && mes >= 2 && año === 1986) || (dia <= 31 && mes <=12 && año === 1986) || (dia <= 28 && mes <= 1 && año === 1987) ||
    (dia >= 28 && mes >= 1 && año === 1998) || (dia <= 31 && mes <=12 && año === 1998) || (dia <= 125 && mes <= 2 && año === 1999) ||
    (dia >= 14 && mes >= 2 && año === 2010) || (dia <= 31 && mes <=12 && año === 2010) || (dia <= 2 && mes <= 2 && año === 2011) ||
    (dia >= 1 && mes >= 2 && año === 2022) || (dia <= 31 && mes <=12 && año === 2022) || (dia <= 21 && mes <= 1 && año === 2023))
    {
         suSignoEs.innerHTML='Tigre';
    } 



}
btnVerSuSigno.addEventListener('click', verificarSigno);


           


//////////////////////////////////////////////////////////////////////////////////////////////77777

//   ****************  ---los  OBJETOS para cada ficha SIGNO--- **********************
                //  para los TEXTOS y demás contenido diverso de cada signo


                let conejo={
                    imagen:"img/conejo.png",
                    titulo:'Conejo',
                    anos:['Del 2 de febrero de 1927 al 22 de enero de 1928: Conejo de Fuego  ||  '+
                        '   Del 19 de febrero de 1939 al 7 de febrero de 1940: Conejo de Tierra  ||  '+
                        '   Del 6 de febrero de 1951 al 26 de enero de 1952: Conejo de Metal  ||  '+
                        '   Del 25 de enero de 1963 al 12 de febrero de 1964: Conejo de Agua  ||  '+
                        '   Del 11 de febrero de 1975 al 30 de enero de 1976: Conejo de Madera  ||  '+
                        '   Del 29 de enero de 1987 al 16 de febrero de 1988: Conejo de Fuego  ||  '+
                        '   Del 16 de febrero de 1999 al 31 de enero de 2000: Conejo de Tierra  ||  '+
                        '   Del 3 de febrero de 2011 al 22 de enero de 2012: Conejo de Metal  ||  '+
                        '   Del 22 de enero del 2023 al 9 de febrero del 2024: Conejo de Agua'],
                    subtitulo:'Amable y compasivo, siempre está dispuesto a ayudar a los demás.',
                    caracteristicas:'El signo chino Conejo se caracteriza por su sensibilidad, creatividad y amabilidad. Son personas amables y diplomáticas, que prefieren evitar conflictos y buscar la armonía en sus relaciones interpersonales. Además, son muy intuitivos y pueden percibir fácilmente las emociones y necesidades de los demás, lo que los convierte en excelentes mediadores y consejeros.\n'+
                    ' Los conejos también son conocidos por su elegancia y buen gusto en todos los aspectos de su vida. Les gusta rodearse de belleza y armonía, por lo que suelen tener un fuerte sentido estético y una inclinación por las artes y la cultura. Son creativos y tienen una mente abierta, lo que les permite innovar y buscar soluciones originales a los problemas que enfrentan.\n'+                    
                    ' A pesar de su amabilidad y diplomacia, los conejos suelen ser reservados y algo tímidos. Les cuesta abrirse completamente a los demás y pueden ser bastante introvertidos, prefiriendo la tranquilidad y la paz interior. Sin embargo, una vez que confían en alguien, son leales y protectores, dispuestos a hacer todo lo posible por ayudar a sus seres queridos.\n'+                    
                    ' En resumen, los rasgos más destacados del signo chino Conejo son su sensibilidad, creatividad, amabilidad y elegancia. Son personas intuitivas y diplomáticas, que buscan la armonía en sus relaciones y se destacan por su buen gusto y originalidad. A pesar de su reserva y timidez, son leales y protectores con quienes consideran sus seres queridos.',
                    predicciones:"Para las personas nacidas bajo el signo del Conejo en el año del Dragón de Madera, se esperan cambios significativos en el ámbito del amor. Será un año propicio para iniciar nuevas relaciones o fortalecer las existentes. Se augura que los solteros tendrán la oportunidad de encontrar el amor verdadero, mientras que aquellos que ya están en pareja podrán consolidar su relación y fortalecerla. Es importante comunicarse de manera abierta y sincera con la pareja para evitar malentendidos y fortalecer la relación. En cuanto al trabajo, se prevén grandes oportunidades de crecimiento y desarrollo profesional para los Conejos. Será un año en el que podrán destacar en su campo laboral y alcanzar el éxito que tanto anhelan. Es fundamental mantener la concentración y la disciplina en el trabajo para aprovechar al máximo las oportunidades que se presenten. Se recomienda mantenerse abierto a nuevas ideas y ser proactivo para avanzar en la carrera profesional. En cuanto a la salud, los Conejos deberán prestar especial atención a su bienestar físico y mental. Se recomienda llevar una dieta equilibrada, practicar ejercicio regularmente y mantener un estilo de vida saludable para prevenir enfermedades. Es importante escuchar las señales que envía el cuerpo y atender cualquier malestar a tiempo. También se aconseja practicar técnicas de relajación como la meditación o el yoga para mantener la mente en calma y reducir el estrés. En general, se prevé un año favorable en términos de salud, pero es importante cuidarse y prestar atención a las señales que envía el cuerpo.",
                    signo2024:"el Conejo:"
                };
                let dragon={
                    imagen:"img/dragón.png",
                    titulo:'Dragón',
                    anos:['Del 22 de enero de 1928 al 9 de febrero de 1929: Dragón de Tierra  ||  '+
                        '   Del 8 de febrero de 1940 al 26 de enero de 1941: Dragón de Meta  ||  '+
                        '   Del 27 de enero de 1952 al 13 de febrero de 1953: Dragón de Agua  ||  '+
                        '   Del 13 de febrero de 1964 al 1 de febrero de 1965: Dragón de Madera  ||  '+
                        '   Del 31 de enero de 1976 al 17 de febrero de 1977: Dragón de Fuego  ||  '+
                        '   Del 17 de febrero de 1988 al 5 de febrero de 1989: Dragón de Tierra  ||  '+
                        '   Del 5 de febrero de 2000 al 23 de enero de 2001: Dragón de Metal  ||  '+
                        '   Del 23 de enero de 2012 al 9 de febrero de 2013: Dragón de Agua  ||  '+
                        '   Del 10 de febrero de 2024 al 28 de enero de 2025: Dragón de Madera'],
                    subtitulo:'Carismático y enérgico, es un líder natural que destaca en cualquier situación.',
                    caracteristicas:'El signo del zodíaco chino del Dragón es conocido por ser carismático, enérgico y valiente. Las personas nacidas bajo este signo suelen ser líderes naturales, con una personalidad magnética que atrae a los demás. Son apasionados y entusiastas en todo lo que hacen, y tienen un gran amor por la vida y la aventura.\n'+
                    ' Además de ser carismáticos, los Dragones son muy creativos e innovadores. Son capaces de destacarse en cualquier campo que se propongan, ya sea en las artes, los negocios o la política. Su mente aguda y su capacidad para encontrar soluciones originales a los problemas les permite destacarse en situaciones desafiantes.\n'+                   
                    ' A pesar de su confianza y valentía, los Dragones también pueden ser impulsivos y tercos en ocasiones. Tienden a seguir sus propias ideas y creencias, lo que a veces puede llevarlos a chocar con los demás. Sin embargo, su determinación y espíritu combativo les ayudan a superar los obstáculos y lograr sus metas con éxito.\n'+                    
                    ' En resumen, el Dragón es un signo fuerte y poderoso en el zodíaco chino, con una personalidad carismática y enérgica. Son líderes natos, creativos e innovadores, aunque a veces pueden ser tercos e impulsivos. En general, los Dragones son apasionados por la vida y tienen un gran potencial para alcanzar el éxito en todo lo que se propongan.',
                    predicciones:"Para el año del dragón de madera, las predicciones en el amor sugieren que será un período muy favorable para las relaciones sentimentales. Los dragones tendrán la capacidad de fortalecer la comunicación con sus parejas y resolver conflictos de manera más efectiva. También se espera que haya mayor armonía y entendimiento en las relaciones, lo que permitirá a los dragones disfrutar de momentos de paz y complicidad con sus seres queridos. En cuanto al trabajo, se pronostica un año de éxitos y logros para los dragones. Su determinación y capacidad para enfrentar desafíos les permitirá alcanzar metas importantes en su vida profesional. Además, se abrirán nuevas oportunidades laborales que les permitirán expandir sus horizontes y crecer en su carrera. Es importante que los dragones se mantengan enfocados en sus objetivos y aprovechen al máximo las oportunidades que se les presenten. En lo que respecta a la salud, se recomienda a los dragones mantener un equilibrio entre el trabajo y el descanso. Es fundamental que cuiden su bienestar físico y emocional, y que adopten hábitos saludables que les permitan mantenerse en forma. También se aconseja prestar atención a posibles problemas de estrés o ansiedad, y buscar ayuda profesional si es necesario. En general, el año del dragón de madera será muy positivo en términos de salud, siempre y cuando los dragones se cuiden y se enfoquen en mantener un estilo de vida equilibrado.",
                    signo2024:"el Dragón:"
                };
                let serpiente={
                    imagen:"img/serpiente.png",
                    titulo:'Serpiente',                    
                    anos:['Del 10 de febrero de 1929 al 29 de enero de 1930: Serpiente de Tierra  ||  '+
                        '   Del 27 de enero de 1941  al 14 de febrero de 1942: Serpiente de Metal  ||  '+
                        '   Del 14 de febrero de 1953  al  2 de febrero de 1954: Serpiente de Agua  ||  '+
                        '   Del 2 de febrero de 1965  al  20 de enero de 1966: Serpiente de Madera  ||  '+
                        '   Del 18 de febrero de 1977  al  6 de febrero de 1978: Serpiente de Fuego  ||  '+
                        '   Del 6 de febrero de 1989  al  26 de enero de 1990: Serpiente de Tierra  ||  '+
                        '   Del 24 de enero de 2001  al  11 de febrero de 2002: Serpiente de Metal  ||  '+
                        '   Del 10 de febrero de 2013  al  30 de enero de 2014: Serpiente de Agua'],
                    subtitulo:'Astuto y misterioso, sabe cómo manejar cualquier situación con habilidad.',
                    caracteristicas:'Los nativos del signo chino Serpiente se caracterizan por ser sabios, intuitivos y misteriosos. Son personas profundamente enigmáticas, que poseen una gran capacidad para analizar situaciones y personas, lo que les permite tomar decisiones acertadas y resolver problemas con facilidad. Su astucia y perspicacia los convierten en excelentes estrategas, capaces de anticiparse a los acontecimientos y encontrar soluciones creativas.\n'+
                    ' Además, las personas nacidas bajo el signo de la Serpiente son elegantes, seductoras y carismáticas, lo que los convierte en grandes comunicadores y persuasivos. Tienen una personalidad magnética que atrae a los demás y les permite influir en su entorno de manera sutil pero poderosa. Aunque pueden ser reservados y de apariencia fría, en realidad son muy apasionados y tienen un corazón generoso y leal.\n'+                    
                    ' Por otro lado, los Serpiente pueden ser reservados y desconfiados, lo que a veces puede llevarlos a mostrar una actitud distante y poco comunicativa. Sin embargo, una vez que confían en alguien, son leales y protectores, dispuestos a hacer cualquier cosa por aquellos que consideran importantes en sus vidas. Tienen una gran capacidad para mantener el equilibrio emocional en situaciones complicadas y para encontrar soluciones prácticas y efectivas.\n'+                    
                    ' En resumen, los nacidos bajo el signo chino Serpiente son seres enigmáticos y profundos, dotados de una inteligencia aguda y una gran habilidad para comunicarse de manera persuasiva. Son personas elegantes, carismáticas y leales, que poseen una gran capacidad para resolver problemas y adaptarse a las circunstancias. Su naturaleza apasionada y reservada los convierte en seres fascinantes y enigmas por descubrir.',
                    predicciones:"Promete ser un año lleno de cambios y oportunidades en el amor. Si estás en una relación, es importante que mantengas una comunicación abierta y sincera con tu pareja para evitar malentendidos y conflictos. Si estás soltero, es probable que conozcas a alguien especial que te haga sentir emociones intensas y te brinde la estabilidad emocional que tanto deseas. En cuanto al trabajo, este año será ideal para avanzar en tu carrera profesional y alcanzar tus metas laborales. La influencia del Dragón de Madera te dará la energía y la determinación necesarias para enfrentar nuevos retos y superar cualquier obstáculo que se interponga en tu camino. Es importante que confíes en tus habilidades y te mantengas enfocado en tus objetivos para lograr el éxito que tanto anhelas. En cuanto a la salud, es importante que prestes atención a tu bienestar físico y emocional durante este año. La Serpiente es un signo que tiende a preocuparse demasiado por los demás y descuidar su propia salud, por lo que es importante que aprendas a poner tus necesidades en primer lugar y a cuidar de ti mismo. Realizar actividades físicas, alimentarte de manera saludable y practicar la relajación serán clave para mantener un equilibrio en tu vida. En general, el año del Dragón de Madera traerá cambios positivos en todas las áreas de la vida de la Serpiente, siempre y cuando se mantenga enfocado en sus objetivos y ponga en práctica un cuidado personal adecuado.",
                    signo2024:"la Serpiente:"
                };
                let caballo={
                    imagen:"img/caballo.png",
                    titulo:'Caballo',                    
                    anos:['Del 30 de enero de 1930 al 16 de febrero de 1931: Caballo de Metal  ||  '+
                        '   Del 15 de febrero de 1942 al 4 de febrero de 1943: Caballo de Agua  ||  '+
                        '   Del 3 de febrero de 1954 al 23 de enero de 1955: Caballo de Madera  ||  '+
                        '   Del 21 de enero de 1966 al 8 de febrero de 1967: Caballo de Fuego  ||  '+
                        '   Del 7 de febrero de 1978 al 27 de enero de 1979: Caballo de Tierra  ||  '+
                        '   Del 27 de enero de 1990 al 14 de febrero de 1991: Caballo de Metal  ||  '+
                        '   Del 12 de febrero de 2002 al 31 de enero de 2003: Caballo de Agua  ||  '+
                        '   Del 31 de enero de 2014 al 18 de febrero de 2015: Caballo de Madera'],
                    subtitulo:'Independiente y enérgico, siempre está listo para emprender nuevas aventuras.',
                    caracteristicas:'Los nacidos bajo el signo del Caballo son personas vigorosas, enérgicas y de espíritu libre. Son naturalmente curiosos y aventureros, siempre en busca de nuevas experiencias y desafíos emocionantes. Su naturaleza optimista y entusiasta los hace ser líderes natos, capaces de inspirar y motivar a los demás con su carisma y determinación.\n'+
                    ' Los Caballos son extremadamente independientes y no les gustan las limitaciones ni las restricciones impuestas por otros. Prefieren seguir sus propios instintos y tomar decisiones basadas en sus propias intuiciones, sin dejarse influenciar por las opiniones de los demás. Su espíritu rebelde y su pasión por la libertad los lleva a desafiarse a sí mismos constantemente, buscando superar sus propios límites y alcanzar sus metas con valentía y determinación.\n'+                    
                    ' En el amor, los Caballos son apasionados y románticos, buscando una pareja que comparta su amor por la aventura y la emoción. Son leales y entregados a su relación, pero también necesitan espacio para seguir persiguiendo sus propios intereses y pasiones. Su naturaleza carismática y encantadora los convierte en compañeros irresistibles, capaces de mantener viva la llama del amor y la diversión en una relación duradera.\n'+                                   
                    ' En el trabajo, los Caballos destacan por su creatividad, su ingenio y su capacidad para pensar fuera de la caja. Son ambiciosos y trabajadores, dispuestos a asumir nuevos desafíos y asumir responsabilidades con valentía y determinación. Su capacidad para adaptarse a nuevas situaciones y su voluntad de aprender y crecer constantemente los convierte en empleados valiosos y apreciados en cualquier organización.',
                    signo2024:"el Caballo:"
                };
                let cabra={
                    imagen:"img/cabra.png",
                    titulo:'Cabra',
                    anos:['Del 17 de febrero de 1931 al 5 de febrero de 1932: Cabra de Metal  ||  '+
                        '   Del 5 de febrero de 1943 al 24 de enero de 1944: Cabra de Agua  ||  '+
                        '   Del 24 de enero de 1955 al 11 de febrero de 1956: Cabra de Madera  ||  '+
                        '   Del 9 de febrero de 1967 al 29 de enero de 1968: Cabra de Fuego  ||  '+
                        '   Del 28 de enero de 1979 al 15 de febrero de 1980: Cabra de Tierra  ||  '+
                        '   Del 15 de febrero de 1991 al 3 de febrero de 1992: Cabra de Metal  ||  '+
                        '   Del 1 de febrero de 2003 al 21 de enero de 2004: Cabra de Agua  ||  '+
                        '   Del 19 de febrero de 2015 al 7 de febrero de 2016: Cabra de Madera'],
                    subtitulo:'Creativa y sensible, tiene un espíritu artístico que la hace destacar.',
                    caracteristicas:'Los nativos del signo chino Cabra, también conocidos como oveja, se caracterizan por su amabilidad, su sensibilidad y su aprecio por la belleza y el arte. Son personas pacíficas y compasivas, que se preocupan por el bienestar de los demás y buscan crear armonía en su entorno. A menudo son creativos y tienen un gran sentido estético, lo que los hace destacar en campos como la música, la pintura o la moda.\n'+
                    ' En el aspecto emocional, las personas nacidas bajo el signo de la Cabra suelen ser muy sentimentales y románticas, valorando las relaciones personales profundas y duraderas. Tienen una fuerte conexión con la familia y los amigos cercanos, y les gusta sentirse protegidos y apoyados en su vida cotidiana. Su intuición suele ser muy aguda, lo que les permite sintonizar con las emociones de los demás y ofrecer consuelo y apoyo cuando más se necesita.\n'+                    
                    ' A nivel laboral, las personas nacidas en el año de la Cabra suelen destacar por su creatividad y su capacidad para resolver problemas de forma original. Son trabajadores dedicados y comprometidos, que ponen su corazón en todo lo que hacen y se esfuerzan por alcanzar la excelencia en su trabajo. Les gusta trabajar en equipo y colaborar con otros para lograr objetivos comunes, y son capaces de inspirar a los demás con su entusiasmo y su positividad.\n'+                    
                    ' En el aspecto social, las personas del signo Cabra suelen ser muy amables y simpáticas, lo que les permite establecer relaciones sólidas y duraderas con los demás. Son personas que se preocupan por el bienestar de los demás y están siempre dispuestas a tender una mano a quienes lo necesitan. Su naturaleza compasiva y empática los convierte en excelentes amigos y compañeros, capaces de brindar apoyo y consuelo en los momentos difíciles.',
                    predicciones:"Será un año de cambios significativos para las personas nacidas bajo el signo de la Cabra. En el aspecto del amor, las personas de este signo experimentarán una mayor conexión emocional con sus parejas. Será un año ideal para fortalecer los lazos sentimentales y para encontrar una mayor estabilidad en las relaciones. Aquellos que estén solteros podrán encontrar el amor verdadero si se abren a nuevas oportunidades y están dispuestos a comprometerse. En cuanto al trabajo, las personas de la Cabra tendrán la oportunidad de crecer profesionalmente y de alcanzar sus metas laborales. Se presentarán nuevas oportunidades de trabajo que les permitirán mostrar su talento y habilidades. Será importante estar abiertos a aprender nuevas habilidades y a trabajar en equipo para alcanzar el éxito en el ámbito laboral. Aquellos que estén buscando un cambio de trabajo o de carrera encontrarán el apoyo necesario para dar ese salto.  En el aspecto de la salud, es importante que las personas de la Cabra cuiden de su bienestar físico y mental. Este año del Dragón de Madera será propicio para llevar a cabo cambios positivos en el estilo de vida, como adoptar hábitos saludables en la alimentación y en la práctica de ejercicios. Será importante también prestar atención a la salud emocional y buscar formas de reducir el estrés y la ansiedad. En general, este será un año favorable para la Cabra en términos de amor, trabajo y salud, siempre y cuando se mantengan enfocados en sus objetivos y dispuestos a enfrentar los desafíos con determinación y optimismo.",
                    signo2024:"la Cabra:"
                };
                let mono={
                    imagen:"img/mono.png",
                    titulo:'Mono',                    
                    anos:['Del 6 de febrero de 1932 al 25 de enero de 1933: Mono de Agua  ||  '+
                        '   Del   25 de enero de 1944  al   12 de febrero de 1945: Mono de Madera  ||  '+
                        '   Del   12 de febrero de 1956  al   30 de enero de 1957:  Mono de Fuego  ||  '+
                        '   Del   30 de enero de 1968  al   16 de febrero de 1969:  Mono de Tierra  ||  '+
                        '   Del   16 de febrero de 1980  al   4 de febrero de 1981:  Mono de Metal  ||  '+
                        '   Del   4 de febrero de 1992  al   22 de enero de 1993: Mono de Agua  ||  '+
                        '   Del   22 de enero de 2004  al   8 de febrero de 2005:  Mono de Madera  ||  '+
                        '   Del   8 de febrero de 2016  al   27 de enero de 2017:  Mono de Fuego'],
                    subtitulo:'Ingenioso y divertido, siempre encuentra la manera de hacer reír a los demás.',
                    caracteristicas:'Los nativos del signo chino Mono se caracterizan por ser inteligentes, curiosos y juguetones. Son personas creativas, ingeniosas y astutas, con una mente ágil y habilidades para resolver problemas de manera ingeniosa. Les encanta explorar nuevas ideas y desafíos, y su sentido del humor y entusiasmo por la vida los hacen muy atractivos y divertidos.\n'+
                    ' Además, los Monos son sociables y extrovertidos, disfrutan de la compañía de los demás y suelen ser el alma de la fiesta. Son comunicativos, elocuentes y persuasivos, lo que les permite ganarse a la gente con facilidad. Su encanto natural y su carisma los convierten en personas muy populares y admiradas en su entorno social.\n'+                    
                    ' Por otro lado, los Monos también tienden a ser impulsivos y un tanto irresponsables, ya que les cuesta comprometerse y seguir reglas establecidas. A menudo se aburren fácilmente y buscan constantemente nuevos estímulos y emociones, lo que puede llevarlos a actuar de manera impredecible y a veces inconsistente.\n'+                    
                    ' En resumen, los Monos son personas creativas, sociables, ingeniosas y aventureras, con un espíritu libre y una mente inquieta que los impulsan a buscar constantemente nuevos retos y oportunidades de diversión. Son grandes comunicadores y tienen una habilidad innata para cautivar a los demás con su encanto y entusiasmo por la vida.',
                    predicciones:"Experimentarán cambios significativos en su vida amorosa. Será un año ideal para fortalecer la comunicación en la pareja y resolver conflictos de forma pacífica. Aquellos que estén solteros tendrán la oportunidad de conocer a una persona especial que llenará sus vidas de alegría y armonía. Es importante mantener la confianza y la sinceridad en todas las relaciones para asegurar un año positivo en el amor. En cuanto al trabajo, los Monos experimentarán un año de grandes logros y oportunidades de crecimiento profesional. Será importante mantenerse enfocados en sus metas y no dejarse llevar por la impaciencia o la impulsividad. Aquellos que estén buscando un cambio de empleo o una promoción encontrarán el éxito si mantienen una actitud positiva y perseverante. Se recomienda trabajar en equipo y desarrollar habilidades de liderazgo para alcanzar el éxito laboral. En términos de salud, los Monos deberán prestar especial atención a su bienestar físico y mental durante el año del Dragón de Madera. Es importante mantener una rutina de ejercicio regular y una dieta balanceada para mantenerse en forma y evitar problemas de salud. La meditación y la relajación serán clave para combatir el estrés y la ansiedad. Se recomienda también hacerse chequeos médicos periódicos para detectar cualquier problema a tiempo y mantenerse en óptimas condiciones de salud.",
                    signo2024:"el Mono:"
                };
                let gallo={
                    imagen:"img/gallo.png",
                    titulo:'Gallo',                    
                    anos:['Del 26 de enero de 1933 al 13 de febrero de 1934: Gallo de Agua  ||  '+
                        '   Del 13 de febrero de 1945 al 1 de febrero de 1946: Gallo de Madera  ||  '+
                        '   Del 31 de enero de 1957 al 17 de febrero de 1958: Gallo de Fuego  ||  '+
                        '   Del 5 de febrero de 1981 al 24 de enero de 1982: Gallo de Metal  ||  '+
                        '   Del 23 de enero de 1993 al 9 de febrero de 1994: Gallo de Agua  ||  '+
                        '   Del 9 de febrero de 2005 al 28 de enero de 2006: Gallo de Madera  ||  '+
                        '   Del 28 de enero de 2017 al 15 de febrero de 2018: Gallo de Fuego.'],
                    subtitulo:'Organizado y meticuloso, no deja ningún detalle al azar en sus planes.',
                    caracteristicas:'El signo del zodiaco Gallo se caracteriza por ser valiente, orgulloso y altamente competitivo. Los nacidos bajo este signo suelen ser líderes natos, con una personalidad fuerte y enérgica que los impulsa a destacarse en todo lo que hacen. Son personas ambiciosas y determinadas, siempre buscando superarse a sí mismos y alcanzar sus metas.\n'+
                    ' Además de su valentía y competitividad, los gallos también se distinguen por ser personas honestas y justas, que no temen enfrentarse a la injusticia y defender sus ideales con firmeza. Son muy leales con sus amigos y familiares, y siempre están dispuestos a ayudar a quienes lo necesiten. Su sentido de la responsabilidad los hace ser líderes en su entorno laboral y social.\n'+                    
                    ' En el aspecto emocional, los gallos son apasionados y entregados en sus relaciones, aunque a veces pueden resultar un poco posesivos y celosos. Les gusta ser el centro de atención y se sienten atraídos por personas con personalidades fuertes y seguras de sí mismas. Son muy protectores con sus seres queridos y harán todo lo posible por mantener la armonía en su entorno.\n'+                    
                    ' En resumen, los gallos son individuos valientes, competitivos y justos, con una personalidad fuerte y enérgica que los impulsa a destacarse en todos los aspectos de su vida. Su lealtad, honestidad y determinación los convierten en excelentes líderes y aliados en cualquier situación. Aunque a veces pueden resultar un poco posesivos y celosos en el amor, su pasión y entrega los hacen ser compañeros fieles y apasionados.',
                    signo2024:"el Gallo"
                };
                let rata={
                    imagen:"img/rata.png",
                    titulo:'Rata',
                    anos:['Del 24 de enero de 1936 al 10 de febrero de 1937: Rata de Fuego  ||  '+
                        '   Del 10 de febrero de 1948 al 28 de enero de 1949: Rata de Tierra  ||  '+
                        '   Del 28 de enero de 1960 al 14 de febrero de 1961: Rata de Metal  ||  '+
                        '   Del 15 de febrero de 1972 al 2 de febrero de 1973: Rata de Agua  ||  '+
                        '   Del 2 de febrero de 1984 al 19 de febrero de 1985: Rata de Madera  ||  '+
                        '   Del 19 de febrero de 1996 al 6 de febrero de 1997: Rata de Fuego  ||  '+
                        '   Del 7 de febrero de 2008 al 25 de enero de 2009: Rata de Tierra  ||  '+
                        '   Del 25 de enero de 2020 al 11 de febrero de 2021: Rata de Metal'],
                    subtitulo:'Inteligente y adaptable, siempre encuentra la manera de sobresalir.',
                    caracteristicas:'La persona nacida bajo el signo chino Rata se caracteriza por ser inteligente, astuta y con una gran capacidad para adaptarse a diferentes situaciones. Son personas curiosas, creativas y con una mente rápida, lo que les permite sobresalir en diferentes áreas de la vida. Además, son sociables y comunicativos, lo que les ayuda a establecer buenas relaciones con los demás.\n'+
                    ' En el aspecto laboral, las personas del signo Rata son trabajadoras y ambiciosas, siempre en busca de nuevos desafíos y oportunidades para crecer profesionalmente. Son organizadas, responsables y tienen una gran capacidad para liderar equipos de trabajo. Además, su ingenio y creatividad les permiten encontrar soluciones innovadoras a los problemas que se les presentan en el ámbito laboral.\n'+                    
                    ' En el aspecto emocional, las personas del signo Rata son cariñosas, leales y protectoras con sus seres queridos. Son personas muy familiares y siempre están dispuestas a ayudar a quienes más lo necesitan. Sin embargo, también pueden llegar a ser manipuladoras y posesivas en sus relaciones, por lo que es importante que aprendan a controlar estos aspectos de su personalidad para mantener una convivencia armoniosa.\n'+                    
                    ' En resumen, las personas nacidas bajo el signo chino Rata son inteligentes, trabajadoras y sociables, con una gran capacidad para adaptarse a diferentes situaciones. Son curiosas y creativas, lo que les permite sobresalir en diferentes áreas de la vida. Sin embargo, también pueden ser manipuladoras y posesivas en sus relaciones, por lo que es importante que aprendan a controlar estos aspectos de su personalidad para mantener una convivencia armoniosa.',
                    predicciones:"Las personas del signo chino de la Rata pueden esperar un año lleno de cambios positivos en el amor. Aquellos que estén en una relación estable podrán fortalecer su vínculo con su pareja, compartiendo momentos de complicidad y ternura. Para los solteros, se presentarán nuevas oportunidades para encontrar el amor y establecer una relación duradera. Es importante mantener la comunicación y la armonía en la pareja para que el amor florezca en este año. En cuanto al trabajo, las personas del signo Rata pueden esperar un año favorable para avanzar en su carrera profesional. Se presentarán nuevas oportunidades para crecer y desarrollarse laboralmente, por lo que es importante estar abiertos a nuevas experiencias y desafíos. La perseverancia y la dedicación serán clave para alcanzar el éxito en el trabajo. También es importante mantener una actitud positiva y proactiva para aprovechar al máximo las oportunidades que se presenten. En cuanto a la salud, en el año del Dragón de Madera, las personas del signo Rata deben prestar especial atención a su bienestar físico y emocional. Es importante mantener una rutina de ejercicio regular y una dieta equilibrada para mantenerse saludables y en forma. También es importante cuidar la salud mental, practicando técnicas de relajación y mindfulness para reducir el estrés y la ansiedad. Con un cuidado adecuado de la salud, las personas del signo Rata pueden disfrutar de un año pleno de bienestar y equilibrio.",
                    signo2024:"la Rata:"
                };
                let tigre={
                    imagen:"img/tigre.png",
                    titulo:'Tigre',                    
                    anos: ['Del 31 de enero de 1938 al 18 de febrero de 1939 Tierra  ||  '+
                        '   Del 17 de febrero de 1950 al 5 de febrero de 1951 Metal  ||  '+
                        '   Del  5 de febrero de 1962 al 24 de enero de 1963 Agua  ||  '+
                        '   Del  23 de enero de 1974 al 10 de febrero de 1975 Madera  ||  '+
                        '   Del  9 de febrero de 1986 al 28 de enero de 1987 Fuego  ||  '+
                        '   Del  28 de enero de 1998 al 15 de febrero de 1999 Tierra  ||  '+
                        '   Del  14 de febrero de 2010 al 2 de febrero de 2011 Metal'],
                    subtitulo:'Valiente y apasionado, nunca teme enfrentarse a los desafíos.',
                    caracteristicas:'El signo del zodíaco chino Tigre se caracteriza por su valentía y determinación. Los nacidos bajo este signo son personas apasionadas y llenas de energía, siempre dispuestas a enfrentar cualquier desafío que se les presente. Son líderes natos, con una fuerte personalidad y un carácter audaz que los hace destacar en cualquier situación.\n'+
                    ' Además de su valentía, los tigres también son muy independientes y se destacan por su espíritu libre. Les gusta tomar sus propias decisiones y seguir su propio camino, sin dejar que las opiniones de los demás influyan en ellos. Son aventureros y están constantemente en busca de nuevas experiencias y emociones, lo que los hace personas muy interesantes y atractivas.\n'+                    
                    ' En cuanto a sus relaciones interpersonales, los tigres son leales y protectores con sus seres queridos. Son capaces de hacer cualquier cosa por aquellos a quienes aman, demostrando una gran generosidad y lealtad. A pesar de su carácter fuerte, son sensibles y pueden mostrar una gran empatía y comprensión hacia los demás.\n'+                    
                    ' En el trabajo, los tigres son ambiciosos y diligentes, siempre buscando superarse a sí mismos y alcanzar sus metas. Son creativos e innovadores, lo que les permite destacarse en cualquier campo en el que decidan incursionar. También tienen una gran capacidad de liderazgo y son capaces de motivar y inspirar a quienes los rodean.\n'+                    
                    ' En resumen, los tigres son personas valientes, independientes y leales, con una fuerte determinación y un espíritu aventurero. Su carácter audaz y su capacidad de liderazgo los hacen destacar en cualquier situación, convirtiéndolos en seres admirables y respetados.',
                    predicciones:"Promete ser un periodo de grandes cambios para el signo del Tigre. En el amor, se esperan momentos de mucha pasión y romanticismo. Los Tigres solteros tendrán la oportunidad de conocer a alguien especial que les hará sentir emociones intensas. Por su parte, los Tigres que ya están en una relación podrán fortalecer sus lazos y vivir momentos inolvidables juntos. En el trabajo, los Tigres también pueden esperar grandes avances y oportunidades de crecimiento. Este será un año en el que tendrán la posibilidad de destacar y demostrar todo su potencial. Es importante que se mantengan enfocados en sus metas y aprovechen al máximo las oportunidades que se les presenten. Será un periodo en el que podrán demostrar su valía y alcanzar sus objetivos laborales. En cuanto a la salud, los Tigres deberán prestar especial atención a su bienestar físico y emocional. Es importante que se cuiden y mantengan un estilo de vida saludable. Practicar ejercicio regularmente, llevar una alimentación equilibrada y dedicar tiempo a actividades que les relajen será fundamental para mantenerse en óptimas condiciones. Además, es importante que se cuiden de posibles situaciones estresantes que puedan afectar su salud. En resumen, este año del Dragón de Madera promete ser un periodo de grandes oportunidades y cambios positivos para el signo del Tigre en el amor, el trabajo y la salud. Será importante estar preparados para aprovechar al máximo todas las posibilidades que se presenten y mantener un equilibrio en todas las áreas de la vida. ¡Buena suerte!",
                    signo2024:"el Tigre:"
                };   
                let buey={
                    imagen:"img/buey.png",
                    titulo:'Buey',
                    anos:['Del 11 de febrero de 1937 al 30 de enero de 1938 Fuego  ||  '+
                        '   Del 29 de enero de 1949 al 16 de febrero de 1950 Tierra  ||  '+
                        '   Del 15 de febrero de 1961 al 4 de febrero de 1962 Metal  ||  '+
                        '   Del 3 de febrero de 1973 al 22 de enero de 1974 Agua  ||  '+
                        '   Del 20 de febrero de 1985 al 8 de febrero de 1986 Madera  ||  '+
                        '   Del 7 de febrero de 1997 al 27 de enero de 1998 Fuego  ||  '+
                        '   Del 26 de enero de 2009 al 13 de febrero de 2010 Tierra  ||  '+
                        '   Del 12 de febrero de 2021 al 31 de enero de 2022 Metal'],
                    subtitulo:'Persistente y confiable, avanza con determinación hacia sus metas.',
                    caracteristicas:'El signo del Buey, también conocido como Búfalo en algunas culturas, se caracteriza por su fuerza, determinación y perseverancia. Las personas nacidas bajo este signo son trabajadoras incansables, capaces de enfrentar cualquier desafío con valentía y determinación. Son conocidas por su sentido práctico y su enfoque metódico en todo lo que hacen.\n'+
                    ' Además de su fuerza física, los Bueyes también son conocidos por su lealtad y fiabilidad. Son personas en las que se puede confiar y que siempre estarán allí para apoyar a sus seres queridos. A pesar de su apariencia tranquila y reservada, los Bueyes tienen un corazón cálido y generoso, dispuestos a hacer sacrificios por el bienestar de los demás.\n'+                    
                    ' Aunque a veces pueden ser tercos y obstinados, los Bueyes también son pragmáticos y realistas. Prefieren la estabilidad y la seguridad en lugar de correr riesgos innecesarios, lo que los convierte en excelentes administradores de recursos y planificadores a largo plazo. Su naturaleza paciente y persistente les ayuda a superar obstáculos y alcanzar sus metas de manera constante y metódica.\n'+                    
                    ' En el amor, los Bueyes son románticos y leales, comprometiéndose a mantener relaciones sólidas y duraderas. Sin embargo, a veces pueden ser posesivos o celosos, debido a su naturaleza protectora y territorial. En resumen, el Buey es un signo trabajador, leal y confiable, que valora la estabilidad, la seguridad y el compromiso en todas las áreas de su vida.,',
                    predicciones:"Los nativos del signo del Buey experimentarán un gran impulso en cuanto al amor. Las parejas establecidas fortalecerán sus lazos y se sentirán más unidos que nunca. Aquellos que aún estén solteros tendrán la oportunidad de conocer a alguien especial que les hará sentir mariposas en el estómago. La comunicación será clave en las relaciones amorosas y es importante expresar los sentimientos de manera clara y sincera para evitar malentendidos.  En cuanto al trabajo, los bueyes podrán destacarse por su dedicación y esfuerzo en sus labores. Será un buen año para plantearse nuevos retos y metas profesionales, ya que contarán con la determinación necesaria para alcanzar el éxito. Es importante mantener la paciencia y la persistencia, ya que pueden surgir obstáculos en el camino. Sin embargo, con una actitud positiva y perseverancia, los bueyes lograrán superar cualquier dificultad que se les presente.En lo que respecta a la salud, los bueyes deberán prestar especial atención a su bienestar físico y mental. Es importante mantener un equilibrio entre el trabajo y el descanso, así como cuidar la alimentación y practicar ejercicio de forma regular. Se recomienda evitar el estrés y la ansiedad, ya que podrían afectar negativamente la salud. Con una actitud positiva y hábitos saludables, los bueyes podrán disfrutar de un año lleno de energía y vitalidad.",
                    signo2024:"el Buey:"
                };
                let perro={
                    imagen:"img/perro.png",
                    titulo:'Perro',                    
                    anos:['Del 14 de febrero de 1934 al 3 de febrero de 1935: Perro de Madera  ||  '+
                        '   Del 2 de febrero de 1946 al 21 de enero de 1947: Perro de Fuego  ||  '+
                        '   Del 18 de febrero de 1958 al 7 de febrero de 1959: Perro de Tierra  ||  '+
                        '   Del 6 de febrero de 1970 al 26 de enero de 1971: Perro de Metal  ||  '+
                        '   Del 25 de enero de 1982 al 12 de febrero de 1983: Perro de Agua  ||  '+
                        '   Del 10 de febrero de 1994 al 30 de enero de 1995: Perro de Madera  ||  '+
                        '   Del 29 de enero de 2006 al 17 de febrero de 2007: Perro de Fuego  ||  '+
                        '   Del 16 de febrero de 2018 al 4 de febrero de 2019: Perro de Tierra'],
                    subtitulo:'Leal y protector, siempre está dispuesto a brindar apoyo a sus seres queridos.',
                    caracteristicas:'El signo chino Perro se caracteriza por ser leal, honesto y protector. Las personas nacidas bajo este signo son fieles a sus seres queridos y están siempre dispuestas a ayudar a los demás. Son honestas y directas en su comunicación, lo que les hace ganarse la confianza de los demás. Además, tienen un fuerte sentido de la justicia y siempre buscan defender a los más débiles.\n'+
                    ' Los perros son también muy trabajadores y responsables, siempre dispuestos a hacer lo que sea necesario para cumplir con sus responsabilidades. Son perseverantes y dedicados, lo que les permite superar los obstáculos que se les presentan en su camino. Aunque a veces pueden ser un poco tercos, su determinación les ayuda a lograr sus metas.\n'+                    
                    ' En cuanto a su personalidad, los perros son leales, amigables y cariñosos. Disfrutan de la compañía de sus seres queridos y son muy afectuosos con ellos. Aunque pueden ser un poco reservados al principio, una vez que se sienten cómodos muestran su verdadero yo y se convierten en compañeros leales y fieles.\n'+                    
                    ' En resumen, el signo chino Perro se caracteriza por su lealtad, honestidad, dedicación y cariño hacia los demás. Son personas trabajadoras y justas, que siempre buscan proteger a los más vulnerables. Su personalidad amigable y afectuosa los hace excelentes compañeros y amigos.',
                    predicciones:"Se pronostica un año lleno de cambios emocionantes en el amor. Aquellos nacidos bajo este signo pueden esperar una mayor estabilidad en sus relaciones, así como la posibilidad de encontrar el amor verdadero si están solteros. Sin embargo, es importante que se mantengan abiertos a nuevas experiencias y se comuniquen de manera clara con sus parejas para evitar malentendidos. También es aconsejable que mantengan la confianza en sí mismos y no permitan que los miedos del pasado interfieran en su felicidad presente. En cuanto al trabajo, se espera que los Perros tengan la oportunidad de destacarse y ser reconocidos por sus habilidades y esfuerzo. Este año será propicio para el desarrollo de nuevas habilidades y la concreción de proyectos importantes. Sin embargo, es fundamental que se mantengan enfocados en sus metas y eviten distracciones que puedan retrasar su progreso. La perseverancia y la determinación serán clave para alcanzar el éxito en el ámbito laboral durante este año. En cuanto a la salud, se espera que los Perros se encuentren en un buen estado general durante el año del Dragón de Madera. Sin embargo, es importante que se cuiden y no descuiden su bienestar físico y emocional. Es recomendable que mantengan una dieta balanceada, realicen ejercicio de forma regular y busquen momentos de relajación y desconexión para prevenir el estrés. También es importante que se realicen chequeos médicos periódicos para detectar a tiempo cualquier posible problema de salud. En general, se pronostica un año positivo en cuanto a la salud para los Perros, siempre y cuando se mantengan atentos a sus necesidades y se cuiden adecuadamente.",
                    signo2024:"el Perro:"
                };
                let cerdo={
                    imagen:"img/cerdo.png",
                    titulo:'Cerdo',                    
                    anos:['Del 4 de febrero de 1935 al 23 de enero de 1936: Cerdo de Madera ||  '+
                        '   Del 22 de enero de 1947 al 9 de febrero de 1948: Cerdo de Fuego ||  '+
                        '   Del 8 de febrero de 1959 al 27 de enero de 1960: Cerdo de Tierra ||  '+
                        '   Del 27 de enero de 1971 al 14 de febrero de 1972: Cerdo de Metal ||  '+
                        '   Del 13 de febrero de 1983 al 1 de febrero de 1984: Cerdo de Agua ||  '+
                        '   Del 31 de enero de 1995 al 18 de febrero de 1996: Cerdo de Madera ||  '+
                        '   Del 18 de febrero de 2007 al 6 de febrero de 2008: Cerdo de Fuego ||  '+
                        '   Del 5 de febrero de 2019 al 24 de enero de 2020: Cerdo de Tierra'],
                    subtitulo:'Generoso y amable, su calidez y bondad son apreciadas por todos los que lo rodean.',       
                    caracteristicas:'El signo del cerdo en la astrología china se caracteriza por su amabilidad, generosidad y espíritu compasivo. Los nativos de este signo suelen ser personas sociables y cariñosas, que siempre están dispuestas a ayudar a los demás. Son muy confiables y leales con sus amigos y familia, y siempre están dispuestos a hacer sacrificios por quienes aman.\n'+
                    ' Por otro lado, los cerdos también son conocidos por su indulgencia y tendencia a dejarse llevar por los placeres de la vida. A veces pueden ser un poco extravagantes y derrochadores, ya que disfrutan de los lujos y las comodidades. Sin embargo, su honestidad y sinceridad hacen que sea fácil perdonarles sus pequeños excesos.\n'+                    
                    ' En el ámbito laboral, los cerdos son trabajadores diligentes y comprometidos, que se esfuerzan por alcanzar sus metas con determinación y perseverancia. Son creativos y tienen una gran capacidad para encontrar soluciones innovadoras a los problemas. Su naturaleza bondadosa y su habilidad para trabajar en equipo hacen que sean colaboradores excelentes en cualquier ambiente laboral.\n'+                    
                    ' En resumen, el signo del cerdo se caracteriza por su amabilidad, generosidad y lealtad, así como por su tendencia a dejarse llevar por los placeres de la vida. Son trabajadores comprometidos y colaboradores creativos, que se esfuerzan por alcanzar sus metas con determinación. En general, los cerdos son personas agradables y confiables, que siempre están dispuestas a ayudar a los demás y a contribuir al bienestar de quienes les rodean.',                    
                    predicciones:"Trae consigo energías positivas para los nativos del signo del Cerdo en diferentes aspectos de su vida. En cuanto al amor, se esperan momentos de gran conexión emocional y estabilidad en las relaciones existentes. Los solteros tendrán la oportunidad de conocer a personas especiales que podrían traerles mucha felicidad y compañía en este año. En general, se vislumbra un año de armonía y comprensión en las relaciones amorosas para los cerdos. En el trabajo, los cerdos pueden esperar un año de crecimiento profesional y logros significativos. Es importante que se mantengan enfocados en sus metas y sean pacientes, ya que los resultados llegarán de manera gradual pero constante. Se recomienda a los cerdos mantener una actitud positiva y proactiva en su trabajo, ya que esto les ayudará a destacarse y alcanzar nuevos niveles de éxito. En cuanto a la salud, los cerdos deben prestar especial atención a su bienestar físico y mental en el año del Dragón de Madera. Es importante que mantengan una rutina de ejercicio regular y cuiden su alimentación para evitar problemas de salud. También se recomienda que busquen momentos de relajación y descanso para recargar energías y mantenerse en equilibrio. En general, se espera que los cerdos gocen de buena salud si siguen estas recomendaciones y cuidan de sí mismos durante este año.",
                    signo2024:"el Cerdo:"
                };
                
                
                






//  ********************   RECOJO ELEMENTOS en VARIABLES  ************************************

let mainContent=document.getElementById('main-content');    
let contenedor=document.getElementById('contenedor');    
let signosEnlaces=document.querySelectorAll('a');      

    let titulo=document.getElementById('tituloV');  
    let diaMes=document.getElementById('diaMesV');
    //let anos1=document.getElementById('anosV1');
    //let anos=document.getElementById('anosV2');
    let anos2=document.getElementById('anos');
    let subtitulo=document.getElementById('subtituloV');
    let caracteristicas=document.getElementById('caracteristicasV');

    let volcado=document.getElementById('volcado');
    let irse=document.getElementById('irse');  
    let volcadoVI=document.getElementById('volcadoVI');
    let imagen=document.querySelectorAll('img');


    let cajaP2024=document.getElementById('caja-p-2024');
    let prediccion=document.getElementById('prediccion');    
    let ir=document.getElementById('ir');
    let salir=document.getElementById('salir');
    let enunciado2024=document.getElementById('enunciado-2024');
    let signo2024=document.getElementById('signo-2024');
    let predicciones2024=document.getElementById('predicciones-2024');

    let imagenTransparente=document.getElementById('imagen-transparente');
    let imagenDragon=document.getElementById('dragon');




//  ************** RECORRIDO A TODOS LOS ENLACES SIGNOS PARA APLICAR LA ATENCIÓN AL QUE SE HAGA CLICK Y VOLCAR SUS CONTENIDOS ***************

imagenTransparente.addEventListener('click',function(){
    imagenTransparente.classList.add('hidden'); // Para ocultar la imagen
});

signosEnlaces.forEach(function (signoEnlace) {
    signoEnlace.addEventListener('click', function(){

        irse.addEventListener('click', function(){    //  Para SALIR DE esta pantalla de volcado
            volcado.style.display='none'; // Ocultar también el contenedor de elementos
            contenedor.style.display="flex";
            imagenTransparente.classList.remove('hidden'); // Para mostrar la imagen de nuevo

            cajaBusca.classList.remove('hidden');  // para que vuelva a  aparecer el buscador signos por fecha y la caja para volcados 
            vea.classList.remove('hidden');
            suSignoEs.innerHTML='';  // y así lo sacará SIN el contenido del nombre del signo anterior
            let dondeEscribir=document.getElementById('donde-escribir');
            dondeEscribir.value = '';  // Y limpiar el campo de fecha
        });      
       
        let talCual=equivalencias(this.textContent);

                while (volcadoVI.firstChild) {   //  Si hubiera alguna imagen anterior se elimina
                        volcadoVI.removeChild(volcadoVI.firstChild);
                    }
                    let imag=document.createElement("img");  // AQUÍ se crea cada IMAGEN
                    imag.src=talCual.imagen;
                    imag.classList='imagenSigno';
                    volcadoVI.appendChild(imag);  

        contenedor.style.display = 'none';
        cajaP2024.style.display = 'none';
        volcado.style.display = 'flex';
        imag.style.animation = "spin 2s linear infinite";

        titulo.innerHTML=talCual.titulo;
       //diaMes.innerHTML=talCual.diaMes;
        //anos1.innerHTML=talCual.anos1;
        //anos2.innerHTML=talCual.anos2;
        anos.innerHTML=talCual.anos;
        subtitulo.innerHTML=talCual.subtitulo;
        caracteristicas.innerHTML=talCual.caracteristicas;
        imag.style.animation = "spin 0.5s linear 1";

        let cajaBusca=document.getElementById('caja-busca');  // estos 4 cods es para que desaparezcan el buscador del signo y caja de volcados
        let vea=document.getElementById('vea');
        cajaBusca.classList.add('hidden');
        vea.classList.add('hidden');

        function animarElemento() {
            prediccion.style.opacity = 1;
            prediccion.style.transition='opacity 2s';
          }
          setTimeout(animarElemento, 1000);      


          
        // .............Si vamos a las PREDICCIONES.................. 
        prediccion.addEventListener('click', function(){   
            
            let talCual=equivalencias(signoEnlace.textContent);
            cajaBusca.classList.add('hidden');
            
            cajaP2024.style.display = 'block';
            volcado.style.display="none";
            contenedor.style.display="none";

            predicciones2024.innerHTML=talCual.predicciones;            
            signo2024.innerHTML=talCual.signo2024;  

            
              function animarPredicciones() {
                const elementos = [cajaP2024, enunciado2024, signo2024, predicciones2024, salir];
              
                elementos.forEach(elemento => {
                  elemento.style.opacity = 1;
                });
              
                cajaP2024.style.transition = 'opacity 0.1s 0.4s 0,4s';
                enunciado2024.style.transition = 'opacity 1.2s';
                signo2024.style.transition = 'opacity 4s';
                predicciones2024.style.transition = 'opacity 7s';
                salir.style.transition = 'all 0.7s 1s';              
              }
              
              setTimeout(animarPredicciones, 500);
            
            salir.addEventListener('click', function(){    //  Para SALIR DE esta pantalla de predicciones
                cajaP2024.style.display='none';
                volcado.style.display='none';
                contenedor.style.display="flex";
                imagenTransparente.classList.remove('hidden'); // Para mostrar la imagen de nuevo

                cajaBusca.classList.remove('hidden');  // para que vuelva a  aparecer el buscador signos por fecha y la caja para volcados 
                vea.classList.remove('hidden');
                suSignoEs.innerHTML='';  // y así lo sacará SIN el contenido del nombre del signo anterior
                let dondeEscribir=document.getElementById('donde-escribir');
                dondeEscribir.value = '';  // Y limpiar el campo de fecha
            });
        });           
    });    
});






//  *************** HAGO EQUIVALENCIAS entre ELEMENTOS  (enlaces con objetos) *****************

function equivalencias(signoEnlace){    //  de  signos enlace a  signos fichas

    let talCual={
                    'Conejo':conejo,
                    'Dragón':dragon,
                    'Serpiente':serpiente,
                    'Caballo':caballo,
                    'Cabra':cabra,
                    'Mono':mono,
                    'Gallo':gallo,
                    'Rata':rata,
                    'Tigre':tigre,
                    'Buey':buey,    
                    'Perro':perro,
                    'Cerdo':cerdo    
    };
    return talCual[signoEnlace];
};


