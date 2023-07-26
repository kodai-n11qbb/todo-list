import './Body.css';
import { UrlConsumer } from '../../providers/UrlProvider';


function Body() {
    return (
        <main>
            <h1>
                <UrlConsumer>
                    {(currentUrl)=>currentUrl.value}
                </UrlConsumer>
                <span>✎</span>
            </h1>

            <article>

            </article>
        </main>
    )
}

export default Body;
