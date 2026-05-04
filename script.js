:root {
    --primary: #6366f1;
    --secondary: #d946ef;
    --dark: #020617;
    --glass: rgba(255, 255, 255, 0.05);
    --border: rgba(255, 255, 255, 0.1);
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: var(--dark);
    background-image: radial-gradient(circle at top left, #1e1b4b, #020617);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 35px;
    padding: 2.5rem;
    width: 380px;
    text-align: center;
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
}

h1 { font-size: 2.5rem; font-weight: 800; margin: 0; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

input {
    width: 100%;
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 15px;
    border: 1px solid var(--border);
    background: rgba(0,0,0,0.3);
    color: white;
    box-sizing: border-box;
}

.btn-main {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    border: none;
    padding: 16px;
    border-radius: 15px;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
}

.pulse { animation: shadow-pulse 2s infinite; }
@keyframes shadow-pulse { 0% { box-shadow: 0 0 0 0px rgba(99, 102, 241, 0.4); } 100% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); } }

.btn-whatsapp {
    background: #25D366;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 12px;
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.ad-slot {
    height: 60px;
    background: rgba(255,255,255,0.02);
    border: 1px dashed #334155;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: #475569;
    margin: 10px 0;
}

#optionList { list-style: none; padding: 0; margin: 20px 0; }
#optionList li { background: rgba(255,255,255,0.05); padding: 10px; margin-bottom: 5px; border-radius: 8px; border-left: 4px solid var(--primary); }

.modal { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:100; justify-content:center; align-items:center; }
.modal-body { background:#1e293b; padding:2rem; border-radius:20px; width:80%; max-width:350px; text-align:center; }

