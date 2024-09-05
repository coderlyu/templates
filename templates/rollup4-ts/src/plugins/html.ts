export default class HtmlPlugin {
    options: Record<string, any>
    constructor(o: Record<string, any> = {}) {
        this.options = o
    }
    apply(compiler: any) {
        compiler.hooks.emit.tapAsync('HtmlPlugin', (compilation: any, callback: Function) => {
            const { html } = this.options
            const { assets } = compilation
            const htmlContent = html.replace(/<%=([\s\S]+?)%>/g, (match, key) => assets[key])
            compilation.assets['index.html'] = {
                source: () => htmlContent,
                size: () => htmlContent.length
            }
            callback()
        })
    }
}