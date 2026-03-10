/**
 * Consumes an iterator and processes each value until timeout is reached.
 * Logs each value with elapsed time.
 *
 * @param {Object} iterator - An iterable object with Symbol.iterator
 * @param {number} timeout - Time in seconds for the timeout
 * @param {number} [intervalMs=1000] - Time in milliseconds between each iteration tick
 */
export function iteratorTimeout(iterator, timeout, intervalMs = 1000) {
  const timeoutMs = timeout * 1000;
  const start = Date.now();
  const now = () => Date.now();

  const timer = setInterval(timerHandler, intervalMs);

  function timerHandler() {
    const elapsed = now() - start;
    const iteration = iterator.next();
    if (iteration.done || elapsed >= timeoutMs) {
      console.log("Finished or timed out");
      clearInterval(timer);
      return;
    }

    console.log(`${elapsed}ms: ${iteration.value}`);
  }
}
