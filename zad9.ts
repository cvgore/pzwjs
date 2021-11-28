async function test(): Promise {
	return new Promise(_ => setTimeout(resolve, 1000));
}