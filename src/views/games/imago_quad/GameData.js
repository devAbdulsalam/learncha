const GameData = [
    // {
    //     id: 1,
    //     class: 'kiss',
    //     src: [
    //         'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=400',
    //         'https://media.istockphoto.com/photos/happy-hispanic-mother-and-son-portrait-parents-love-and-unity-concept-picture-id1370979242?b=1&k=20&m=1370979242&s=170667a&w=0&h=rzVYiC3jxoElI1gQDQGOXbNLc0rxeJ5MgSZwm1I2UHc=',
    //         'https://images.unsplash.com/photo-1569706548645-8034449f6a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    //         'https://media.istockphoto.com/photos/red-fawn-french-bulldog-dog-with-orange-kiss-lips-photo-prop-in-front-picture-id1295958523?b=1&k=20&m=1295958523&s=170667a&w=0&h=VzA3pgFTDQLGiuDRsczh4Gl3OZNl3FZ5tRWxVqCMESo='
    //     ],
    // },
    {
        id: 2,
        class: 'family',
        src: [
            'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            'https://images.unsplash.com/photo-1647833202056-e6e67293ba81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            'https://images.pexels.com/photos/11933170/pexels-photo-11933170.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 3,
        class: 'address',
        src: [
            'https://images.unsplash.com/photo-1542120926-32f3559e9473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWRkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/8349233/pexels-photo-8349233.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1600378624049-ba424aee11b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFkZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        ],
    },
    {
        id: 4,
        class: 'children',
        src: [
            'https://images.pexels.com/photos/8034585/pexels-photo-8034585.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1542317785-ae7b6fa20f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWxkcmVuJTIwZW1vaml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRyZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1577896852618-01da1dd79f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGRyZW4lMjBlbW9qaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        ],
    },
    {
        id: 5,
        class: 'computer',
        src: [
            'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 6,
        class: 'plain',
        src: [
            'https://media.istockphoto.com/photos/aerial-view-of-green-agricultural-fields-in-spring-with-fresh-after-picture-id1325715998?k=20&m=1325715998&s=612x612&w=0&h=CwWmoHuIttiw9mRQi28ol4mKHk2zz95nQiv1QuA9plE=',
            'https://images.unsplash.com/photo-1605004670974-fad4e42e5bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhaW4lMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/uploads/141362941583982a7e0fc/abcfbca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1484958615078-5005fa8ce9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ],
    },
    {
        id: 7,
        class: 'summer',
        src: [
            'https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/531035/pexels-photo-531035.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwc3VtbWVyJTIwc3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ],
    },
    // {
    //     id: 8,
    //     class: 'hot',
    //     src: [
    //         'https://images.unsplash.com/photo-1495063378081-52411c3eedf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwc3VtbWVyJTIwc3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    //         'https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.unsplash.com/photo-1579904380653-bca3242e4594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //         'https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    {
        id: 9,
        class: 'food',
        src: [
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        ],
    },
    {
        id: 10,
        class: 'drink',
        src: [
            'https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1553531580-220f4720ae87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1541288892379-c987c60cd049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ],
    },
    {
        id: 11,
        class: 'shadow',
        src: [
            'https://images.unsplash.com/photo-1531308268447-b0ad6e3f39b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV5ZSUyMHNoYWRvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/6070351/pexels-photo-6070351.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1',
            'https://images.pexels.com/photos/1968738/pexels-photo-1968738.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/6472771/pexels-photo-6472771.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 12,
        class: 'mouse',
        src: [
            'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1581332974556-7e28a5b0e953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1329320/pexels-photo-1329320.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 13,
        class: 'map',
        src: [
            'https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/760860/pexels-photo-760860.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 14,
        class: 'happy',
        src: [
            'https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21pbGV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/65665/smile-mouth-teeth-laugh-65665.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 15,
        class: 'phone',
        src: [
            'https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/859264/pexels-photo-859264.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 16,
        class: 'water',
        src: [
            'https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2F0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 17,
        class: 'keyboard',
        src: [
            'https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3536459/pexels-photo-3536459.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 18,
        class: 'vehicle',
        src: [
            'https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZlaGljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/225841/pexels-photo-225841.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/5201255/pexels-photo-5201255.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 19,
        class: 'moss',
        src: [
            'https://images.unsplash.com/photo-1597517697687-acc0c17b2603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9zc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/96633/pexels-photo-96633.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/695817/pexels-photo-695817.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
    },
    {
        id: 20,
        class: 'vegetable',
        src: [
            'https://images.pexels.com/photos/40720/basil-herbs-green-mediterranean-40720.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        ],
    },
    // {
    //     id: 21,
    //     class: 'plant',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 22,
    //     class: 'farm',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 23,
    //     class: 'love',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 24,
    //     class: 'meadow',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 25,
    //     class: 'swarm',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 26,
    //     class: 'mountain',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 27,
    //     class: 'insect',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 28,
    //     class: 'valley',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 29,
    //     class: 'keyboard',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 30,
    //     class: 'organ',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 31,
    //     class: 'jump',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 32,
    //     class: 'climb',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 33,
    //     class: 'pie',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 34,
    //     class: 'root',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 35,
    //     class: 'maths',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 36,
    //     class: 'shallow',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 37,
    //     class: 'number',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 38,
    //     class: 'robot',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 39,
    //     class: 'machine',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 40,
    //     class: 'laboratory',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 41,
    //     class: 'wheel',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 42,
    //     class: 'eat',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 43,
    //     class: 'aircraft',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 44,
    //     class: 'ape',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 45,
    //     class: 'swim',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 46,
    //     class: 'tree',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 47,
    //     class: 'clown',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 48,
    //     class: 'cartoon',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 49,
    //     class: 'herd',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
    // {
    //     id: 50,
    //     class: 'milk',
    //     src: [
    //         'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/119550/pexels-photo-119550.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     ],
    // },
]
export default GameData;