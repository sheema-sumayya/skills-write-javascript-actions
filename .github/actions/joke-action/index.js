const core = require('@actions/core');
const request = require('request-promise');
async function run(){
  try{
    const name=core.getInput('name')||'friend';
    const res = await request({
      uri:
        ''https://official-joke-api.appspot.com/jokes/random',
    json:true,
      });
  const joke= res && res.setup&& res.punchline ? '${res.setup}-${res.punchline}' : 'No joke found';
  core.info('Hello ${name}! Here's a joke:${joke}');
    core.setOutput('joke',joke);
}catch (eoor){
  core.setFailed(error.message);
}
}
run();
