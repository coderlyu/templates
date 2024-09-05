declare namespace global {
	type JSbridgeRes = {
		param: {
			[name: string]: unknown
			_errMsg: {
				code: number
			}
		}
		bridgeParam: {
			status: {
				status_reason: string
				status_code: number
			}
			action: string
			callbackID: number
		}
	}
	type JSbridgeType = {
		call: (
			module: string,
			identifier: string,
			params: Record<string, unknown>,
			callback: JSbridgeCallback
		) => void
	}
	type JSbridgeCallback = (res: JSbridgeRes) => void
	interface Window {
		spider: any
		KDJSBridge2: JSbridgeType
		pathTracker: any
		pecker: any
	}
}
