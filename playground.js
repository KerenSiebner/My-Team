
const greeting = <h1>Hello react! So lovely to see you!</h1>

const heading = <h1>Hello JSX</h1>

const imgIdx = (Math.random() > 0.5) ? 1 : 2
const img = <img src={`./assets/img/${imgIdx}.jpeg`} />

const isDark = false
const dynClass = isDark ? 'dark' : 'light'

let button
if (isDark) {
    button = <button>Go light</button>
} else {
    button = <button>Go dark</button>
}

const HelloWorld =
    <div>
        {button}
        <h2 className={dynClass + ' header'} title="Header">Some Header</h2>
    </div>

const age = 7
const msg = <h1>
    {(age >= 18) ? 'Old enough' : 'Too young'}
</h1>


const baby = false
const cute = true
const tasty = <div>
    <h1>Conditional rendering - short circuit</h1>
    <ul>
        <li>Chips</li>
        {(baby && cute) && <li>Chocolate</li>}
        {(age > 15) && <li>Shakshuka</li>}
        {age > 40 && <li>Soda</li>}
        {age > 70 && <li>Eggplant</li>}
    </ul>
</div>


const names = ['Harry', 'Barry', 'Garry', 'x', 'y', 'Harry']

const NamesList = <ul>
    {names.map((name, idx) => {
        return <li key={name + idx}>{name}</li>
    })}

</ul>


function handleClick(ev, num) {
    console.log('I WAS CLICKEDDD', ev)
    console.log('I WAS CLICKEDDD', num)
}

const SomeButton = <button
    onClick={(ev) => handleClick(ev, 7)}>
    Click Me!
</button>


function SomeFuncCmp() {
    return <h1>Hello Function Component</h1>
}

function Welcome(props) {
    console.log('props', props)
    return <h1 title={props.title}>Hello there {props.name}</h1>
}

const x = 'is the best'
const games = <div>
    <Welcome name="Luki" title={x} names={names}/>
    <Welcome name="Muki" title="is the worst" />
    <SomeFuncCmp />
    <SomeFuncCmp />
    <SomeFuncCmp />
    <SomeFuncCmp />
    {/* <SomeFuncCmp/> */}
    {NamesList}
    {NamesList}
    {SomeButton}
    {tasty}
    {greeting}
    {msg}
    {HelloWorld}
    {img}
    <ul>
        <li>Car</li>
        <li>Doll</li>
        <li>Puzzle</li>
    </ul>
</div>





// We will only have one of these in each app!
const elContainer = document.getElementById('root')
const root = ReactDOM.createRoot(elContainer)
root.render(games);
