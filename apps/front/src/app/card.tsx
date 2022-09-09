export function Card({ color, number }: { color: string, number: string }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .card {
            background-color: white;
            height: 100px;
            width: 75px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;

          }
          .number {
            font-size: 50px;
            font-weight: bold;
            text-align: center;
            margin: 0;
            font-family: 'Roboto', sans-serif;
          }
          .trefle,
          .pique {
            color: black;
          }

          .carreau,
          .coeur {
            color: red;
          }

          .color {
            height: auto;
            width: 50%;
          `,
        }}
      />
      
      <div className="card">
        <p className={`number ${color}`}>{ number }</p>
        <img className="color" src={`./assets/img/${color}.png`} alt={`${color}`} />
      </div>
    </>
  );
}

export default Card;
