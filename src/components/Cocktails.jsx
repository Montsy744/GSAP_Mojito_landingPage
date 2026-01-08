import { cocktailLists } from "../../constants";

const Cocktails = () => {
    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most populaire cocktails</h2>

                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => {
                            <li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Cocktails;