const autocannon = require('autocannon');

const run = () => {
  const instance = autocannon({
    url: 'http://localhost:9002',
    connections: 10, // default
    pipelining: 1, // default
    duration: 10, // default
  });

  autocannon.track(instance, { renderProgressBar: true });

  instance.on('done', (result) => {
    console.log('\nLoad Test Results:');
    console.log(`Requests/sec: ${result.requests.average}`);
    console.log(`Latency (ms): ${result.latency.average}`);
    console.log(
      `Throughput (MB/sec): ${result.throughput.average / 1024 / 1024}`,
    );

    if (result.errors > 0) {
      console.error(`Errors encountered: ${result.errors}`);
      process.exit(1);
    } else {
      console.log('✅ Load test passed with no errors.');
    }
  });
};

run();
