import React from 'react';

const Route = (props) => {
    console.log(props)
    let propsvar=props.match.params.test_params;
    return (
        <div>
            <h1>404</h1>
            <h2>Page you Requested not found { propsvar }</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Que Manilium, ab iisque M. Quod ea non occurrentia fingunt, vincunt Aristonem; Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Aliam vero vim voluptatis esse, aliam nihil dolendi, nisi valde pertinax fueris, concedas necesse est. Propter nos enim illam, non propter eam nosmet ipsos diligimus. </p>

            <ul>
                <li>Cur haec eadem Democritus?</li>
                <li>Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui.</li>
                <li>Duo Reges: constructio interrete.</li>
                <li>Videsne, ut haec concinant?</li>
            </ul>



        </div>
    )
}

export default Route;