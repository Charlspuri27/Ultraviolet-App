self.__uv$config = {
    prefix: "/uv/service/",
    bare: "/bare/", 
    // FIXED: Removed the extra https:// and fixed the quotes
    wisp: "wss://silky-rubia-proxy-servers-6bfe5d14.koyeb.app/wisp/", 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    client: "/uv/uv.client.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",
};
