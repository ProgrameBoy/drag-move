import dragMove from "./dragMove"
const components = {
    dragMove
}

const install = function (vue) {
    Object.keys(components).forEach(name => {
        vue.component(name, components[name])
    })
}

export default {
    install,
    components
}