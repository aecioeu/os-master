console.log('funcoes whats')

const sendMessage = async (data) => {
    const response = await fetch("/api/whatsapp/send", {
      method: "POST",
      body: JSON.stringify(data), // string or object
      headers: {
        "Content-Type": "application/json",
      },
    });
    let respData = await response.json(); //extract JSON from the http response
    //console.log(data);
  };
  
  const sendButtonMessage = async (data) => {
    const response = await fetch("/api/whatsapp/send-button", {
      method: "POST",
      body: JSON.stringify(data), // string or object
      headers: {
        "Content-Type": "application/json",
      },
    });
    let respData = await response.json(); //extract JSON from the http response
    console.log(data);
  };
  const checkWhatsapp = async (phoneNumber) => {
    // Atualiza o ícone do grupo de entrada para "🗙" indicando que a verificação está em andamento
    $(".input-group-text").text("🗙");
  
    // Limpa o campo de entrada do WhatsApp
    $("#whatsapp").val("");
  
    try {
      // Faz uma requisição POST para a API de verificação do WhatsApp
      const response = await fetch("/api/whatsapp/check", {
        method: "POST",
        body: JSON.stringify({ number: phoneNumber }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Extrai o JSON da resposta HTTP
      const responseData = await response.json();
  
      // Log para depuração
      console.log(responseData);
  
      if (responseData) {
        if (responseData.exists) {
          // Atualiza o ícone do grupo de entrada para "✔️" se o número existir no WhatsApp
          $(".input-group-text").text("✔️");
          // Preenche o campo de entrada com o JID do WhatsApp
          $("#whatsapp").val(responseData.jid);
        } else {
          // Atualiza o ícone do grupo de entrada para "🗙" se o número não existir no WhatsApp
          $(".input-group-text").text("🗙");
          // Limpa o campo de entrada do WhatsApp
          $("#whatsapp").val("");
        }
      }
    } catch (error) {
      console.error("Ocorreu um erro durante a verificação do WhatsApp:", error.message);
      // Em caso de erro, garante que o ícone do grupo de entrada seja "🗙"
      $(".input-group-text").text("🗙");
    }
  };
  
  
  export {
    sendButtonMessage,
    checkWhatsapp
  }
  
  