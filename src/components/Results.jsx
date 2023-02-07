import Card from "./Card";

export default function Results({results}){
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl xl:max-w-6xl mx-auto p-4">
            {results.map((result) => (
                <Card key={result.id} result={result}/>
            ))}
        </div>
    )
}