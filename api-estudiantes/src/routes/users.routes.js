import {Router} from 'express'

const userRouter = Router()

// Datos quemados (hardcoded)
let estudiantes = [
    {
        id: 1,
        nombre: "Ana López",
        edad: 17,
        grado: "Segundo Año"
    },
    {
        id: 2,
        nombre: "Carlos Pérez",
        edad: 18,
        grado: "Tercer Año"
    }
];



userRouter.get("/", (req, res) => {
    // BUSCAR EN LA BASE DE DATOS
    console.log("Alguien consulto el endpoint");
    res.status(200).json({message: "Endpoint de obtener funcionando"})
})

/*
=================================
GET - Obtener estudiantes
=================================
*/
userRouter.get("/estudiantes", (req, res) => {
    res.status(200).json(estudiantes);
});

/*
=================================
GET - Obtener estudiante por ID
=================================
*/
userRouter.get("/estudiantes/:id", (req, res) => {
    const id = Number(req.params.id);

    const estudiante = estudiantes.find(
        est => est.id === id
    );

    if (!estudiante) {
        return res.status(404).json({
            mensaje: "Estudiante no encontrado"
        });
    }

    res.status(200).json(estudiante);
});

/*
=================================
POST - Agregar estudiante
=================================
*/
userRouter.post("/estudiantes", (req, res) => {
    const { nombre, edad, grado } = req.body;

    if (!nombre || !edad || !grado) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        edad,
        grado
    };

    estudiantes.push(nuevoEstudiante);

    res.status(201).json({
        mensaje: "Estudiante agregado correctamente",
        estudiante: nuevoEstudiante
    });
});

/*
=================================
PUT - Actualizar estudiante
=================================
*/
userRouter.put("/estudiantes/:id", (req, res) => {
    const id = Number(req.params.id);

    const estudiante = estudiantes.find(
        est => est.id === id
    );

    if (!estudiante) {
        return res.status(404).json({
            mensaje: "Estudiante no encontrado"
        });
    }

    const { nombre, edad, grado } = req.body;

    estudiante.nombre = nombre || estudiante.nombre;
    estudiante.edad = edad || estudiante.edad;
    estudiante.grado = grado || estudiante.grado;

    res.status(200).json({
        mensaje: "Estudiante actualizado correctamente",
        estudiante
    });
});

/*
=================================
DELETE - Eliminar estudiante
=================================
*/
userRouter.delete("/estudiantes/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = estudiantes.findIndex(
        est => est.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "Estudiante no encontrado"
        });
    }

    estudiantes.splice(indice, 1);

    res.status(200).json({
        mensaje: "Estudiante eliminado correctamente"
    });
});




userRouter.post("/create", (req, res) => {
    const {name, age} = req.body
    if (!name || !age){
        return res.status(400).json({message: "Faltan datos: nombre o edad"})
    }
    res.status(201).json({message: 'El usuario ${name} de ${age} se ha creado'})
})

userRouter.put("/update/:id", (req, res) => {
    const { id } = req.params
    const {name, age} = req.body
    if (!name || !age){
        return res.status(400).json({message: "Faltan datos: nombre o edad"})
    }
    res.status(200).json({message: `El usuario con ID: ${id} se ha actualizado`})
})

userRouter.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({message: `El usuario con ID: ${id} se ha eliminado`})
})

userRouter.get("/test", (req, res) => {
    res.status(200).json({ mensaje: "Hola bienvenidos a la informacion de estudiantes 🤦‍♀️🤦‍♂️" })
})

export default userRouter