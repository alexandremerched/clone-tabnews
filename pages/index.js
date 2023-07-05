function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 20,
        gap: 25,
      }}
    >
      <h1>My Besto Friendo</h1>
      <p style={{ width: 400 }}>
        Quero que você saiba que você é uma pessoa importante para mim, e que
        por mais que esteja sendo dificil sua vida, aguente mais um pouco que
        logo eu chegarei para seu resgate!
      </p>
      <img
        src="https://media.tenor.com/YhsYMfR-zdsAAAAM/fma-fullmetal-alchemist.gif"
        style={{ width: 350 }}
      />
      <span style={{ fontSize: 3 }}>isso foi bem gay</span>
    </div>
  );
}

export default Home;
