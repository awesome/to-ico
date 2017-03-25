import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';

export default {
	entry: 'index.js',
	moduleName: 'toIco',
	targets: [
		{
      dest: 'to-ico.js',
      format: 'iife'
    }
	],
	plugins: [
		nodeResolve({jsnext: true, module: true}),
		commonjs(),
    builtins({preferBuiltins: true}),
	],
	sourceMap: 'inline'
};
