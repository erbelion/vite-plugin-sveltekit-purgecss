import { PurgeCSS, UserDefinedSafelist, StringRegExpArray, ComplexSafelist } from 'purgecss'

type Options = {
    paths?: string[],
    safelist?: UserDefinedSafelist
}

const svelteRegex = /(svelte-)[a-zA-Z0-9]{6}/

export function purge (options?: Options) {
    return {
        name: 'vite-plugin-sveltekit-purgecss',
        enforce: 'post',
        async generateBundle(_options, bundle) {
            const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'))
            if (!cssFiles) return

            options ??= {} as Options
            options.safelist ??= {} as UserDefinedSafelist
            if(options.safelist.constructor.name === 'Array')
                (options.safelist as StringRegExpArray).push(svelteRegex)
            else if(options.safelist.constructor.name === 'Object'){
                (options.safelist as ComplexSafelist).greedy ??= [] as RegExp[]
                (options.safelist as ComplexSafelist).greedy.push(svelteRegex)
            }
            
            let paths = ['src/**/*.{svelte,html}']
            options?.paths?.forEach(path => paths.push(path))
            for (const file of cssFiles) {
                //TODO
                if(!Object.hasOwn(bundle[file], 'source')) continue

                const purged = await new PurgeCSS().purge({
                    content: paths,
                    css: [{raw: bundle[file]['source']}],
                    safelist: options?.safelist
                })
                bundle[file]['source'] = purged[0].css
            }
        }
    }
}