// @ts-nocheck
;(async function start() {
    console.log("Start");
    const nest = document.getElementById('nest');
    nest.innerText = `${await apiService.get()}`;

    const btn = document.getElementById('btn');
    console.log('hearing on button click');
    const publisherList = document.getElementById('publisherList');
    btn.addEventListener('click', async () => {
        console.log('making a click');
        const publishers = await apiService.getPublishers();

        publishers.forEach(publisher => {
            const li = document.createElement('li');
            li.innerText = publisher.name;
            publisherList.appendChild(li);
        });

    });
})().catch(console.error);