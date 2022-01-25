function Titulo(props) {
    console.log(props);
    return (
        <>
            {props.fTese('QUALQUER COISA', () => { return 5 })}
            <div>
                <h1>{props.children}</h1>

            </div>
            <style jsx>{`

            `}
            </style>
        </>
    );
}
function HomePage() {
    function testef(arg, arg2) {
        return (
            console.log(arg, arg2().toString())
        )
    }
    return (
        <div>
            <Titulo fTese={testef}>Bem vindo ao nosso discord!</Titulo>
        </div>

    )
}


export default HomePage