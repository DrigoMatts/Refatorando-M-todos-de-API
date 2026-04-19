const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Banco de dados em memória
let produtos = [
    { id: 1, nome: "Notebook Gamer", preco: 7500, estoque: 30, categoria: "Eletrônicos" },
    { id: 2, nome: "Cadeira de Escritório", preco: 1200, estoque: 50, categoria: "Móveis" },
];

// 1. Listar todos os produtos (GET)
app.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

// 2. Buscar um produto específico por ID (GET)
app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((p) => p.id === id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado." });
    }
});

// 3. Adicionar um novo produto (POST + VALIDAÇÃO)
app.post("/produtos", (req, res) => {
    const { nome, preco, estoque, categoria } = req.body;
        // Validação
        if (!nome || preco <= 0) {
            return res.status(400).json({ erro: "Nome e preço > 0 obrigatórios" });
        }
    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
        nome,
        preco,
        estoque,
        categoria
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto); // Status server: 201 
});

// 4. Modificar um produto (PUT)
app.put("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((p) => p.id === id);

    if (index !== -1) {
        produtos[index] = { ...produtos[index], ...req.body };
        res.status(200).json(produtos[index]);
    } else {
        res.status(404).json({ mensagem: "Produto não localizado." });
    }
});

// 5. Remover um produto (PATCH)
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const inicialLength = produtos.length;
    
    produtos = produtos.filter((p) => p.id !== id);

    if (produtos.length < inicialLength) {
        res.status(204).send(); // Status server: 204 No Content 
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado." });
    }
});

//app.listen(PORT, () => {
    //console.log(`Servidor RESTful rodando na porta ${PORT}`);
//});

// 6. Remover (DELETE)
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    produtos.splice(index, 1);
    res.status(204).send(); // Sucesso sem conteúdo
});

app.listen(PORT, () => {
    console.log(`Servidor RESTful rodando em http://localhost:${PORT}`);
});