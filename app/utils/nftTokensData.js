const nftTokens = [
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "AWzTUvpfBiAFMRWJ4BjNBAK2KZmPYeK79wBRtaNVm18a",
        "mint_account": "Bdp3aTZPJpTGw16wtA5Y5xNX6zStUsrHXyLe9KaYRuUX",
        "metadata_account": "HeeKhiQdSnReSkfZ2gfg2xgJ4LMTHFMTqdcTjMFkebwc"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "9JmB7j9LKsSq2XjthkmsJiMEhUtT9s99fta9JYfKVgMi",
        "mint_account": "8aAW6yoJrKVvxWF1gkywZwqy2M7rzfjMSujL8dSkzZT2",
        "metadata_account": "8XAobD846mchp7vWuSUuS9WawxKJmF38iebSnQYVVAYZ"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "AahYEBEtu27ujpbQ9K4ZrnjZbPNJwwaNZQRFP8KBr3Nu",
        "mint_account": "34MZJraA1TtEw79wHrHXFVi4Tw7Rt8rTZp8mEq1AAQug",
        "metadata_account": "FJUYjB7hTdJg8voDxSwZynyGre1nUDWFjP9DPTE5z2Ya"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "3325mbBTEdLKHnp7Mg8gbRxXYev6kXCmsY6ubQ9dTpdN",
        "mint_account": "2gGQuXM4BvTi8FGV2F5wQ4H5cbKmq9PKnWqGkCUUvPeL",
        "metadata_account": "Hn1co2Dmd5sfMj72qPMXiWkZkuvagUALBhanhrDeEJB8"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EFmD7w677LHeaU3uE4Q4UDee8ovwTSb2gqTbE8dfXd3R",
        "mint_account": "4ubbNMwQ9g7Lx3EKWJELRJwNGawc9LH5ZFZGcUFFSQcM",
        "metadata_account": "2bxJi61Awf7qYfkJfKjEeDxbfwYfWvJHJieJX4FTckfa"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "9dUsLiVeWPrb6wM2EJu6bxHt1mBDppjX5RMKdxB4mE3C",
        "mint_account": "DchEQJ8j6Z1wSpk8PnThS7uhwUrt4TYUy1WXJ1f2shZ3",
        "metadata_account": "31JCabTtsEg83wVSo2ZkoZ69DUrKSrJsXzfgJdwvTwFN"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "CsjFH51GPz8TwmwtFZ6UCccjoko66GHQPRTkkw9qqn91",
        "mint_account": "Ez2UTZomxQHf2PuBj7fkfNzxFDX68SdtjAfihxWWvRyR",
        "metadata_account": "GKwx97CoWSxcx3K4m5CxmQF6jvdeq6q1eaEeDTHcaoy3"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EEPT5TbVC3RRbT4xaBXYTmkqefbfCHJxjsp1L9iFsKbH",
        "mint_account": "4S7F3QP4VB1XeBEvH8wKnHVmK5Pt1syS9bZ2KfTg1sFh",
        "metadata_account": "AaNrMPemdAFcn1gygfu2fgtwWbD3HgcucZdtnfSGgtJb"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EyU9qpnJxH3o3FEQ4aShJKmQVZ1rBJyEC4SGDYspftgC",
        "mint_account": "DxazX3uqWQxh2CW3pq9BeVoC9oeSYnEuzXpHsQbRz4V5",
        "metadata_account": "HKinZUpDD2iJ1wWVHWKctebV5cvDMJHTXsd5aou4TXb9"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "GLpwNXkCK8QXipvganGA2URaqin5NkAdddTeFExviryo",
        "mint_account": "99v1bimSpaXhJ3zwCZBigdhxAfM7GXCubNdt8UEjBkxu",
        "metadata_account": "F6UyjikWW8TXteZr3XDdB7tjxXRshog9hRXx4G7Y3YFe"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "GmGVFxXbG59A5SU9p4HK7SV6KyqBDHuj5f8QZMpdUq1U",
        "mint_account": "33cBBmbTQoRoAfp3xkG1GXkobQJV6cfLTJqxN6K1imC6",
        "metadata_account": "Fa7oyB66oswDc1UZAUn76hFgdt52gwLX3JWeBRxQvEAA"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "9i7tAF9EVBTU8iZZHkHfMPb4yPtCaFnQkz9EWJgN3a8",
        "mint_account": "9dt7GmERFiChesdA4PdJVB4DibJ7TQAZkudVmf6h2pmy",
        "metadata_account": "6YTAvDrNt9HWd2uuy26jMkfh31WHUTZQsutC8ftX2aHs"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "7fkaUrgivRKiDqMLhTF2YB5ZB1Cd7EQ5vFiro9MDCKKT",
        "mint_account": "CRQrdxd7e8dCizRhgvQaQas8xGbWSaJ1NvtPPJM7FEXK",
        "metadata_account": "Frhb1nTfM45dvz8g8ftqRq7np9ixRHaj7iPcp6AXC3Ad"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "Gmyj3eDukBnRDceGY81Pp2rKD6uCjjRR6MM7UAh154wv",
        "mint_account": "3AoiwKLVzRaMdvdNQvnXuFHRDJrKczef4TP7vzzhvYhL",
        "metadata_account": "6aH24AfiPLSSTUdtYUnxbo1dDbZr7RKFSoXhJDa8xsyK"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "FnirQSCbVjErgKMMwVzTPpmUE1AKaedCb2DyLkNtGcr9",
        "mint_account": "ADEEWstPGCzdXRqEzj5xxPeJ69HbbZ4j61uCLDzTUau",
        "metadata_account": "6sva8x6pRepQpNvGGdinRnx94J85Vx55mK9wPQXQ5d64"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "8ctCVvG3vgsoTJRnT7vprheXqnMcsA7KmmUp1NQDD3eu",
        "mint_account": "3Bz2ufZ8L7nXszpQFHNRjZkohKwbTtaNMemKeBNYcTpD",
        "metadata_account": "GyaC62GLRHdUawJq81PWMHN6jcgnDpecv7S6KTqBMz4E"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "J1NhyPPYUZ9AGri1T2aqhXWxASFGAEdPRxqaztzDjyjg",
        "mint_account": "Ek9uUc8QQ8fgA3d6tTZmqchYiGqKLg3CrYW8yU7znD6J",
        "metadata_account": "HQCt7p96e63VDeUB9vgnH7sfrh43VoECTkmkLKzDjeqW"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "E3p9C9TxboCNLDk6RM6BvBVDxQz9Y6QTpEqFuyzdqfPz",
        "mint_account": "2RiEnpkDU28jsudMcAdLqQEDC5i3zib6XcLpq3AHFA3e",
        "metadata_account": "EHfS2Z58YuBwvy2UiWvMyXn9xwvWhZhEQFGGFq91oKAS"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "2N624RPVdENXzeusbJmWkeR5Fp2S5xriG3QPQFwAThKQ",
        "mint_account": "3ZMNFWFeyvMqiJC1pnUsEvMPzdfy8HkoU4N6G1xDRPhc",
        "metadata_account": "Hon9tuTvn2qpcHNQnBo1d2iSn8Lyw73c9tg2rTNejKdx"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "GHmgqWSp1GUUwZvqss428mHMWfZRVr4CjjFq13kLhsYE",
        "mint_account": "BWftYZcagpbPJNF4hgN9nhnZUj35McPFkjAhQfh7LUTw",
        "metadata_account": "BWKaGYm3E16qBiJ7CT1J7f2rPJg7rzLrmLmRb5PEe2B2"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "CcArH7L98ENe4TTbrRTVxUMusXKAfEJ2ZjMiGYN3Pmc4",
        "mint_account": "EG4ASi51FA63WUfEu8BDrgaq9KYzxWpmW1nhdLhzVr6M",
        "metadata_account": "57ePBiqiYbWBFAMqmE6Wd3yefsdv4BYzm3HHiLAJAjq2"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "ZMVPTxNKvVDQDFeNh8qkrqGbPtc9zaY3zSAMBRo33GV",
        "mint_account": "9rMrjEFULEddLC3bzFcpvu2HbcFWELsvHozPLVfxnWiE",
        "metadata_account": "7XyPCGiGLqK6UvQBAXbquoMPjzURrrtWrcap47pVafek"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "6PmfxWXyVprBANn1EAxqhtTEsPuUr6pFAgSPTs9X8Yyw",
        "mint_account": "C7HDdfqnsFZXX6pNaSTYz3XCkfQXAqVy4gA8uLwnxj37",
        "metadata_account": "4Qrudb7PZ6cVsgj98to9srHMGbwWySEBDAyLkJU5sph3"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "8SKyqb1ernM5MoF1pJFsiLHws4TVbrUFRwqyi4CCYU9R",
        "mint_account": "BRt7tBLT2xZeinnhymBvqUuUwgcLqqKrjfi3YRqmby8G",
        "metadata_account": "7JHPD9FYRHFuWSZ5DGasPYFd8SkyNMdzMojyrYyJDHTa"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EyvvjbswBvC91XjxWNEfjjKkJsho32HiTeSFHkU2zN7j",
        "mint_account": "CDCQqjWsC8CJbjis8bMe5iSdbA4n2sEwmFQVNpi6E3wZ",
        "metadata_account": "2riijcKwoaNaKVzDpR6ytFMuX2C5WibFHCXFAc1VyHzr"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EfF6sFGDVmE67p8axCTqCNzpDBmjatfy2w7AKmj2S1Ee",
        "mint_account": "HjjueNrk5iA6tcB8JxHrpzbEkjKTZqggsZAv8xGbwg6d",
        "metadata_account": "9a4r33yR9Lzns6AvBjh4VbPNMTpcDio5BeSb3aM8aDy7"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EGCeYFR4ovgtyEWGCm73uUcB67Qk82NphAiNwH9suYJe",
        "mint_account": "CMKS5rbC2dYw9jWjk35RHKsGoPri3rgH9Ub6BxwrRBsn",
        "metadata_account": "CnxsA9aBNMb5Wwr6zSvSVc5w1gzmrQoUby1QdP4uHFvX"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "3QLFzJvq1t9HxZk3SRDUeGTR3zka68nEaxc8TSfb84ge",
        "mint_account": "4PfxD4TBz1FVmgQvZaBqFDa8m5a4Q4vTAY5K22MhZjME",
        "metadata_account": "GQH8ZobD6F2k1RaibUPu3btBAn5eBuUuLkTsADJFDzZu"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "ED75QQkeK7BLEeSycnUoA145nwwYyhy4C4UVNgGcdxdn",
        "mint_account": "8tjoEuX8o7iXJKp7XkEVLgxbJCPUriVvxmkdMv4PT3zd",
        "metadata_account": "5xS6z31W4jRxnHnd46LfbqFSo9grfiPEpS97fCagGL2X"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "ZpsK6Hs9EyTY4vbhYhxcMdD22YKHG9RTRLpKyWYvtJA",
        "mint_account": "AWRLiTWfqSrMrujK9VbMEoyBnhqd6Yv6V7SasukigamS",
        "metadata_account": "3tHbQYHGy2ANqEB8jfJ9Ee4S126ppw2iCZcaBk2w8f8m"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "EuaYLeqyL3QKcrxUfXqETgee54rUZ589Jgffc49Yo7Q6",
        "mint_account": "ZrVvfpsjgk3SwuPnJ9NrGNh5yS6zrHYjo3mwTJYhsw1",
        "metadata_account": "5tyCRbSTJfzAs5VS477HEC4QecLRDLnNTi2Jnn6PufJs"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "HSeJvy4okN2zpbxQ6BWweYPNAAGr4UCQ94bWcb2dY1L2",
        "mint_account": "AS56W2ktj2ujMB3eUBUZwYMnoi15WjcconZjJC2KdyiP",
        "metadata_account": "A3EY1Uu5ZcR85bQfjsQvEDoh6B2bmvL8bNPVuoBu5XKC"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "GoT9DkQVCDFuT3aRYw5rFmRGdBPX1FhLN8pHbtuFvehE",
        "mint_account": "65WHBq3cX29GTYeKeTGyPpMtgX7RdSjC1wwW6AhWJwMr",
        "metadata_account": "GncqtZhpGvCVGgWLZHL6Qtr5GWAxyFjzypYF8qFDzTiQ"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "5fXsi1LgarBkafLyoJcoFWUNgKEUcfkLZiAzBU4Y5vRf",
        "mint_account": "AwyaddVgH7CWHUxjxNFWjjbEyp9HgWX5mCx6dp9yXEYE",
        "metadata_account": "DjbuqY282xMVR9riHKwEvQDy121Pk1NhtdcYEFAruCSh"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "H1tsMXSThCoL6U5bmEa45VJh9hDjU2aj7QiQ5bEGGjXd",
        "mint_account": "527KzhaEiKW8M1TQVzZ1gMCZdSExqX7AW59h9WbpdZu6",
        "metadata_account": "4UYJVB98CjBiJcFD5ksXTCvZUJrqmGQx17yNAxQnZbsS"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "CLRQaw7khzda5QG84x2VebFaJy3ebqf9UoMQ3bbM31c2",
        "mint_account": "GWCiE3BbeHuMRSd8eKqgeJdATQddCch3oQ1LsVkmznC5",
        "metadata_account": "23A6bEoJkohcy9QFLa5qJtg5dndvWcuFYHEiW1uouUaq"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "2zdWW7HDrNXuqXgzi4xLjAKK6GLbjFpf3ap3uSDwQSRa",
        "mint_account": "HMC87LvBsaxTL8PatJpgypbAiTyqL74FGfAgUgYAj89r",
        "metadata_account": "6gU1rZRJXb7Kntp4hTyXocsYByDsnnSESf1zehLxMrDG"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "8tuuwRmnNw2qRQWBeAVSAY4EuAYEbh4XHkE31D2vD94H",
        "mint_account": "2SWKcsygeDYqUMRiVEt78FDf6CQDM6FPjLRz1wd1ng5Z",
        "metadata_account": "BB2b5CRkfSq3ijaWMz8LuwnUeRN7EGxss6Wtw6MsocTX"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "4AXeDzYWG88gQNJDrvZq6kGQM3s1XMtcMV9NmJqyeDCM",
        "mint_account": "GDbtUgKapc8Hoq2coxNVkfFkonPu3cW6vqrpsHbcrzFM",
        "metadata_account": "Evx8VSHWk6PDeRJhskuLhSbe6m5D9SiSNUm94Nr5myv9"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "GHycV12n4bPCG5UvDNPGv3LnmST4qJngDMEQ984ZfGXZ",
        "mint_account": "A47QRA7jx31Bbx3o3VJSXMtV8CvC9s3VW8prF3Mfvktx",
        "metadata_account": "E2jcyH8G9rtSFp1xQZLb5b3o2AC4DEJsm2vM4uaTx2xv"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "HzL84ZPLqMisbH7tuxje2wt5TA9AWeU5246QiqqMh7UD",
        "mint_account": "9BSU3SZF3SWxCLQd22XD633KahsjSpzUZ1uxH2FrUs1Y",
        "metadata_account": "FcHqDtXi7pexMW8BcJbN5hkjqoQDGQUANW6renJknSh5"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "4qpzhAqzcj4GrSyJskpHSYk8hjfKWDXb9ovsfFzgLmdi",
        "mint_account": "2JnDpBHNhEmLC5pGafzcLM25JKZvEu6idTeVGaYpPX7E",
        "metadata_account": "HvypcMMUNTCosTgu6H3JbA8Q8avNHhaqTP4WJ1LCFBHP"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "7RemPAVoChegsN6NWZQXmHnD9TWRbpPcnsByiEiMX6GP",
        "mint_account": "5AMmzqyrdcEKrkdkFYd99pKGqd64fUCSNek3nmYjZWob",
        "metadata_account": "Eb8rsUp2LnbSzwwaRwjoeMh4q8aj77SEoqwSmPcXqei8"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "Bq8sFDDUQoatw3FxWB4nb5VKPqEFSaibjtg4qPT6GEdW",
        "mint_account": "DYFtoQMpGoajzr5ntXQavCH2N5um2EFawetVHyxX2o7f",
        "metadata_account": "2iWCFFNZLbefWr6CVoERsfny8d8Kbm59sVHRJQrmRrbA"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "6vUw4weTdWpkg1sYYLEsAAgCLAbT24Vuvva4V5ScwpRr",
        "mint_account": "D67yHBULPHuCocaufBJALEqoCzkeZ8qQbGi4o797FP7u",
        "metadata_account": "3RGHVKTD5czBZgBjHEUX3ZgMxWZmjzqFWuWLDMto7Dwb"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "AAT8c5QyH8wE7pzU5LYz3UnFRjcfXEkCbcqPDa4SA46T",
        "mint_account": "ABFTvpoo6Dx9cMDzhJdd9YvnpMm2pVv1LJgut6BYNxuP",
        "metadata_account": "AVpMLEeBLFoabbhqaHirPKZkqcAxERPsq4oj4aYdpnJN"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "hSyPXW6uBDtvWkybVRt9LjssxS3bCvCZLzJsFTnkwhZ",
        "mint_account": "HQHm47JAYwU1UY6ZzfGJkTqZstrjvQhTnKN1GMy4nn5i",
        "metadata_account": "2cQ5tYaVaMpeZvZwggjEyVHoHSs2gS76xr1YMHQ1cQea"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "AvqiwqRWDpEx6t2Wzr1jWAF1iFLWGMvCtaFNdXXSFRub",
        "mint_account": "72RUrrjLgyjcBUk8S1L9RZPj8BQs95Vg7W3tw9zrkeHY",
        "metadata_account": "3UA3CFHV5ULP1qkzFdDE5VrczknWB4uFKGgvaaB4Wdw8"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "WFxm7gEz2jQwoyrFU7ZrsrdoKXjdB3aLTYH9YW5uQb8",
        "mint_account": "EZLXZGaFN9S2bDUPPrSLugW5nK9G3Tp9ye3tcie1vh1S",
        "metadata_account": "EjGvDRPKZXKiNHTNhzXsmp5s3DsbzuzXFPNKXiHuU6gq"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "G16QWF5BdvYLiAoaCZnpQkRzAMPAw8vsEdCaShhsUNBP",
        "mint_account": "9g8nn1zcraJktcEGRJBphQkek4cLBaLjk8kCQCqUTguh",
        "metadata_account": "4HgoJrZvvgyxbmLSkSZQEJGyQ3TwwtnQnYxpjoubsNLG"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "9rioAgLPSuw8ZHSxbuKnwd9ie6dbU1e8Po44tgHiqfrS",
        "mint_account": "2z49eD3TYs5DqAay4QcyK8gb8kt5aocVFyeqbZoWQYyW",
        "metadata_account": "ADtigtUN7ULfXw3uXEwAn3xzbBz7Ez24QoZaemJFN3kr"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "BdiDbohrh7LsFV34kTP8TFfMieens3YSqwiRvjoM2A9J",
        "mint_account": "3D52iNfkpWua34fGfSQEW77HkpBtVHKHaCbPeBcCpWPw",
        "metadata_account": "8z8Mhw7pUFiXy6tFmkRin7CXQCHW415UArCuzP92HMms"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "CgPko3oqdYovHYZRtSZ1WD1eNQj8aoWAnyzAUPp1vmWz",
        "mint_account": "7fMSGRFNd9eB3Tqewg8YUNqPvB46Eer1PNiKhXmL6AkD",
        "metadata_account": "BPh1UTRXyutNBcAfbMxghsUkPW4vCcnMtcFa2HerMuZJ"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "CBpW2F9enoHg5y24hGusMgahzUrVMeSr83HNDbbESd3P",
        "mint_account": "EpEEZHHcNvZprHEnKULoJJ6bDDqGNNxBXtGpEL3khA4C",
        "metadata_account": "An2zxQUVfFD8vH2sJAmPy8eznUZRdm3ssKUoohXNHth5"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "9NXmXmCVnEUrcki9U24PhqcKBfJFHuNwg88cThPBPiEh",
        "mint_account": "BKxNZbjX1zsq9HsoyBzxoRqdaFRXzXsLoQJmscmNi7fE",
        "metadata_account": "AM6J5LX1ko1EL3aY26s5RKGbU1LiRmEDm6K8km9BPPzp"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "5miZCdHd48NnZgoCn3PdnH1wB9dV9FpS4sHjpVC32X4N",
        "mint_account": "8yCn5Mu8qsAKA6411PzcUSYJ6aL138rEqzqUQBHNdZKX",
        "metadata_account": "BdbTDrRXAfAFNANdvaNpz6jvEqiHVzJPAHTAaAGyuxwY"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "DFWe2LEXZ4xtt1jnjA7fbe7mTb1JeKnu9SqHvBeJb2i2",
        "mint_account": "75G1yN5jQshjdYcEsHChgU5xuvaEhM1dEowd7Z3ereGK",
        "metadata_account": "EVXchzpkX9dDqvMY1qJpAvFCNijMUQS6qMDB8zGm1N2J"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "d3PKV26dKQNQGmxoBHfDRU1TYXBxXucgm4vsv4cNvJH",
        "mint_account": "8nDwrAKbWv1KgPsGX4puig2F39t1U1AZm88c3aQ6fSYF",
        "metadata_account": "A85WMQKEokKUUwBqwKwQt5owP2vMQvvU4mNtpnWh4F4U"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "8ZMTL9TbRgTcPzBxPk253hVE6YKi4mgqqBpFZ38625Tz",
        "mint_account": "JBG5LGR7TUb7VhmYKWMuT2o7WDnnrBYt22GKeQsySf4X",
        "metadata_account": "33mAmQqDkxeKYZoujCA56e29RGkcnrua9qmhwb7QTfAF"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "D6RdvsLA7HcXkMyvfyoT9hfjRRctJCAFwsGsxnMj1QLh",
        "mint_account": "G8JCo2vmTHfvxpWR8atzsYTk26AKGrQe7J8UXrtU991A",
        "metadata_account": "J67b9UnKSQPgfjvf2FF5bokdrsU5SLwUwpVVqXvq4r1K"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "6dSrB6b4Hu57kLKBgd8qEcXHx6iVXV8RCPLLnbC62M5z",
        "mint_account": "FVpE6qBWciwJRwjSarYNbyRMN9JmpvGQdJy9hiyJhd7v",
        "metadata_account": "9VrQaLX6UKssSEGDPFdfNLfZhmCg6mHYXCyK3wSsWp7E"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "AuV2fL3MRyDudxjFataWvd66UDwVRseELmGCT81SokqS",
        "mint_account": "7axvqjYJL2Sm9tGzZSBZKcuqDpo1oLvFPPdAkNGeEPy2",
        "metadata_account": "9TDesn1pAf57jpxV45rjvT2oL42VUw1bkeRNMmfqjksu"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "Dy5iEWbB6xmtqbHUfokbzu1b9hd1MxGuENpXeS8LySAC",
        "mint_account": "6gDKNrLS5rwrgzsHazmD7S3xMMLuxjz2JKdno3XvJGL6",
        "metadata_account": "5M9nMvEADAUj2hWNDBEVpYtXGNcicYKU8UQr7NT2s5jB"
    },
    {
        "owner_wallet": "4KzogKU9sN7DGbBDkC5fXrj3zdkWrtrN7q1htC8LLQUb",
        "associated_token_address": "5o2wknG7YM3YWfmbH9xbJYKsjgtUvPqtHVTKUcfHTgRR",
        "mint_account": "N9rFZapjDnbQcMMY5ywzRDH984qTA33VxquP1wDXvon",
        "metadata_account": "Hyc129gJ5d1fTQKTccs2V4faaWEm2JTHAyuoS3bB6eS1"
    }
]

module.exports = nftTokens