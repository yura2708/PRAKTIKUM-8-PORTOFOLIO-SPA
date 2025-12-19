import profileImg from "../assets/profile.jpg.jpeg";

function Home() {
  return (
    <main className="container">
      <aside className="card profile hover-box">
        <img src={profileImg} alt="Profile" />
        <h3>Fairuz Farah Mukti</h3>
        <p>
          Mahasiswa Sistem Informasi <br />
          Universitas Ahmad Dahlan
        </p>
      </aside>

      <section className="content">
        <div className="card hover-box">
          <h2>Tentang Saya</h2>
          <p>
            Saya adalah mahasiswa prodi Sistem Informasi di Universitas Ahmad Dahlan
            yang tertarik pada pengembangan web dan desain.
          </p>
        </div>

        <div className="card hover-box">
          <h2>Keahlian</h2>
          <div className="skills">
            <span>Editing Video</span>
            <span>Komunikasi Tim</span>
            <span>Cisco Packet Tracer</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;