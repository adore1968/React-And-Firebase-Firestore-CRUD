import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <main className="p-6">
        <section>
          <div>
            <Form />
            <ItemList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
