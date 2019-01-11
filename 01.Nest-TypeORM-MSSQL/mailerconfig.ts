export = {
    transport: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'cody6878@gmail.com',
        pass: 'c19796859'
      }
    },
    defaults: {
      forceEmbeddedImages: true,
      from:'"nest-modules" <modules@nestjs.com>',
    },
    templateDir: './src/common/email-templates'
  }