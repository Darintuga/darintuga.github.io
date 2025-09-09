export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["code_bounds.html","doc/CodingTheory.pdf","doc/aaron_potechin_talk.pdf","doc/agreement_expansion_part1.pdf","doc/agreement_expansion_part2.pdf","doc/boolean_function_analysis.pdf","doc/codes_reading.pdf","doc/double_samplers.pdf","doc/exp_both_loc_glob.pdf","doc/garland.pdf","doc/hdx_group.pdf","doc/hdx_open_prob1.pdf","doc/ko_construction.pdf","doc/ko_simplified.pdf","doc/pcp_reading.pdf","doc/sos_reading.pdf","doc/spectral_gap.pdf","expander.png","pond.jpg"]),
	mimeTypes: {".html":"text/html",".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.98a75b39.js","app":"_app/immutable/entry/app.85ea3603.js","imports":["_app/immutable/entry/start.98a75b39.js","_app/immutable/chunks/index.8528c4bc.js","_app/immutable/chunks/singletons.cec54668.js","_app/immutable/entry/app.85ea3603.js","_app/immutable/chunks/index.8528c4bc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
