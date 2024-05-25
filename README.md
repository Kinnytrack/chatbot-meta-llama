# Chatbot Using meta-llama/Meta-Llama-3-70B-Instruct.
# Run on Akash Network
- you'll need a wallet with AKT tokens
- Now, go to (http://console.akash.network)
- Here is the [model](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct) used.
- Docker installed on your local machine( In this case we do not need docker installed as we already have a docker image).
- Akash CLI installed and configured.
- A Hugging Face account with acces to the Meta/llama models
- A Hugging Face (HF) token with read access
- Use the SDL From [here]()
- Replace `hf_your_token` with your Hugging Face token in the SDL
- Click deploy button
- Approve the transaction
- Wait for a while for the model to download
- Check the logs for any updates
- After the model is downloaded use the api code for calling and sending the requests.
- Use Any API testing tools to interact and chat with the model
- I'm Using NodeJs to interact with the model.

# Deployment of the Model on Akash Netwoork
- Once deployed, you can access your application via the global IP provided by the Akash network.
- Use the code from [here](https://github.com/Kinnytrack/chatbot-meta-llama/blob/main/index.js) to interact with the Model.
- After the model is loaded replace `http://API_ENDPOINT/v1/chat/completions` with the link you get from leases tab.
- Ask the model anything you want.

# Licences
This project is licensed under the MIT License. See the [LICENSE](https://huggingface.co/meta-llama/Meta-Llama-3-70B/blob/main/LICENSE) file for details.

## Acknowledgements
 - [Hugging Face](https://huggingface.co/)
 - [Akash Network](https://akash.network/)
 - [Meta-Llama-3-70B-Instruct](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct)
