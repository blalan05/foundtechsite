import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/microsoft-identity-association.json","favicon.png","sitemap.txt","_redirects"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.bb55ff55.js","app":"_app/immutable/entry/app.e3ed8fb6.js","imports":["_app/immutable/entry/start.bb55ff55.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/singletons.71cc2d53.js","_app/immutable/entry/app.e3ed8fb6.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/15.js'))
		],
		routes: [
			{
				id: "/vtbiocca",
				pattern: /^\/vtbiocca\/?$/,
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
})());
