import { NotificationCode } from '$lib/utils/notifications'

export default {
  l: 'ru',
  language: 'Русский',
  common: {
    home: 'Главная',
    back: `Назад`,
    next: `Далее`,
    finish: 'Завершить',
    save: `Сохранить`,
    cancel: `Отмена`,
    delete: `Удалить`,
    username: `Имя пользователя`,
    password: `Пароль`
  },
  notifications: {
    [NotificationCode.INVALID_INPUT]: `Некорректный ввод.`,
    [NotificationCode.MISSING_INPUT]: `Отсутствуют обязательные данные.`,
    [NotificationCode.UNAUTHORIZED]: `Не авторизован.`,
    [NotificationCode.FORBIDDEN]: `Доступ запрещён.`,
    [NotificationCode.INVALID_REQUEST]: `Некорректный запрос.`,
    [NotificationCode.NOT_FOUND]: `Не найдено.`,

    [NotificationCode.SETUP_INVALID_LANGUAGE]: `Язык должен состоять ровно из 2 символов.`,
    [NotificationCode.SETUP_DATABASE_PASSWORD_TOO_SHORT]: `Пароль базы данных должен быть не менее 12 символов.`,
    [NotificationCode.SETUP_ADMIN_USERNAME_TOO_SHORT]: `Имя администратора должно быть не менее 2 символов.`,
    [NotificationCode.SETUP_ADMIN_USERNAME_TOO_LONG]: `Имя администратора должно быть не более 64 символов.`,
    [NotificationCode.SETUP_ADMIN_PASSWORD_TOO_SHORT]: `Пароль администратора должен быть не менее 12 символов.`,

    [NotificationCode.EMLAT_NAME_TOO_SHORT]: `Название EML AdminTool должно быть не менее 2 символов.`,
    [NotificationCode.EMLAT_NAME_TOO_LONG]: `Название EML AdminTool должно быть не более 64 символов.`,
    [NotificationCode.EMLAT_INVALID_LANGUAGE]: `Язык должен состоять ровно из 2 символов.`,
    [NotificationCode.EMLAT_UPDATED]: `EML AdminTool успешно обновлён.`,
    [NotificationCode.EMLAT_UP_TO_DATE]: `EML AdminTool уже обновлён до последней версии.`,
    [NotificationCode.EMLAT_UPDATE_FAILED]: `Не удалось обновить EML AdminTool. Проверьте логи для деталей.`,
    [NotificationCode.EMLAT_RESET_FAILED]: `Не удалось сбросить EML AdminTool. Проверьте логи для деталей.`,

    [NotificationCode.PROFIL_NAME_TOO_SHORT]: `Имя профиля должно быть не менее 1 символа.`,
    [NotificationCode.PROFIL_NAME_TOO_LONG]: `Имя профиля должно быть не более 64 символов.`,
    [NotificationCode.PROFIL_ALREADY_EXISTS]: `Профиль с таким ID уже существует.`,
    [NotificationCode.PROFIL_PORT_WITHOUT_IP]: `Нельзя указать порт без IP-адреса.`,
    [NotificationCode.PROFIL_INVALID_TCP_PROTOCOL]: `TCP протокол должен быть одним из следующих: modern, 1.6, 1.4-1.5, beta1.8-1.3.`,

    [NotificationCode.EDIT_USER_USERNAME_TOO_SHORT]: `Имя пользователя должно быть не менее 2 символов.`,
    [NotificationCode.EDIT_USER_USERNAME_TOO_LONG]: `Имя пользователя должно быть не более 64 символов.`,

    [NotificationCode.EDIT_ACCOUNT_USERNAME_TOO_SHORT]: `Имя пользователя должно быть не менее 2 символов.`,
    [NotificationCode.EDIT_ACCOUNT_USERNAME_TOO_LONG]: `Имя пользователя должно быть не более 64 символов.`,
    [NotificationCode.EDIT_ACCOUNT_PASSWORD_TOO_SHORT]: `Пароль должен быть не менее 8 символов.`,

    [NotificationCode.AUTH_SESSION_EXPIRED]: `Сессия истекла, пожалуйста, войдите снова.`,
    [NotificationCode.AUTH_INVALID_SESSION]: `Недействительная сессия, пожалуйста, войдите снова.`,

    [NotificationCode.LOGIN_BAD_CREDENTIALS]: `Неверные учётные данные.`,
    [NotificationCode.LOGIN_USERNAME_TOO_SHORT]: `Имя пользователя должно быть не менее 2 символов.`,
    [NotificationCode.LOGIN_USERNAME_TOO_LONG]: `Имя пользователя должно быть не более 64 символов.`,

    [NotificationCode.REGISTER_USERNAME_TOO_SHORT]: `Имя пользователя должно быть не менее 2 символов.`,
    [NotificationCode.REGISTER_USERNAME_TOO_LONG]: `Имя пользователя должно быть не более 64 символов.`,
    [NotificationCode.REGISTER_PASSWORD_TOO_SHORT]: `Пароль должен быть не менее 8 символов.`,
    [NotificationCode.REGISTER_PIN_INVALID]: `PIN должен состоять ровно из 3 символов.`,
    [NotificationCode.REGISTER_USERNAME_EXISTS]: `Имя пользователя уже существует.`,

    [NotificationCode.FILESUPDATER_VERSIONS_MISMATCH]: `Несовпадение версий.`,
    [NotificationCode.FILESUPDATER_MINECRAFT_VERSION_NOT_FOUND]: `Версия Minecraft не найдена.`,
    [NotificationCode.FILESUPDATER_LOADER_VERSION_NOT_FOUND]: `Версия загрузчика не найдена.`,
    [NotificationCode.FILESUPDATER_GAME_VERSION_NOT_FOUND]: `Версия игры не найдена.`,

    [NotificationCode.BOOTSTRAPS_MALFORMED_VERSION]: `Версия в YAML-файле имеет неверный формат.`,
    [NotificationCode.BOOTSTRAPS_INVALID_FILES]: `Один или несколько загруженных bootstrap-файлов некорректны.`,

    [NotificationCode.MAINTENANCE_INVALID_DATES]: `Некорректные даты обслуживания. Дата начала должна быть раньше даты окончания.`,

    [NotificationCode.NEWS_TITLE_TOO_SHORT]: `Заголовок новости должен быть не менее 1 символа.`,
    [NotificationCode.NEWS_TITLE_TOO_LONG]: `Заголовок новости должен быть не более 255 символов.`,

    [NotificationCode.NEWS_CATEGORY_NAME_TOO_SHORT]: `Название категории новости должно быть не менее 1 символа.`,
    [NotificationCode.NEWS_CATEGORY_NAME_TOO_LONG]: `Название категории новости должно быть не более 64 символов.`,
    [NotificationCode.NEWS_CATEGORY_ALREADY_EXISTS]: `Категория новостей уже существует.`,

    [NotificationCode.NEWS_TAG_NAME_TOO_SHORT]: `Название тега должно быть не менее 1 символа.`,
    [NotificationCode.NEWS_TAG_NAME_TOO_LONG]: `Название тега должно быть не более 64 символов.`,
    [NotificationCode.NEWS_TAG_ALREADY_EXISTS]: `Тег уже существует.`,

    [NotificationCode.BACKGROUND_NAME_TOO_SHORT]: `Название фона должно быть не менее 1 символа.`,
    [NotificationCode.BACKGROUND_NAME_TOO_LONG]: `Название фона должно быть не более 255 символов.`,
    [NotificationCode.BACKGROUND_INVALID_STATUS]: `Некорректный статус фона.`,
    [NotificationCode.BACKGROUND_ALREADY_EXISTS]: `Фон с таким названием уже существует.`,

    [NotificationCode.NOT_FOUND_ERROR]: `Не найдено.`,
    [NotificationCode.DATABASE_ERROR]: `Ошибка базы данных.`,
    [NotificationCode.UPDATER_ERROR]: `Ошибка обновления.`,
    [NotificationCode.FILE_SYSTEM_ERROR]: `Ошибка файловой системы.`,
    [NotificationCode.INTERNAL_SERVER_ERROR]: `Непредвиденная ошибка.`,
    [NotificationCode.EXTERNAL_API_ERROR]: `Ошибка внешнего API.`,
    [NotificationCode.NETWORK_ERROR]: `Ошибка сети. Проверьте подключение к интернету и попробуйте снова.`
  },
  setup: {
    setup: `Установка`,
    step1: {
      title: `Сначала выберите язык EML&nbsp;AdminTool:`,
      subtitle: `Этот язык будет применён для всех пользователей.`,
      other: `Я говорю на другом языке.`,
      modal: {
        title: `Вы говорите на другом языке?`,
        content: `EML AdminTool сейчас доступен только на пяти языках.<br>
Однако мы рады, что проект становится доступен всё большему числу людей в разных странах!<br>
<br>
Если вы хотите помочь с переводом EML AdminTool, вы можете найти JSON-файлы на нашем GitHub и инструкцию по отправке перевода. Если он будет принят, он станет доступен в будущих версиях!`,
        more: `Подробнее`
      }
    },
    step2: {
      title: `Теперь выберите пароль для базы данных:`,
      subtitle: `Вам не нужно будет его запоминать.`,
      placeholder: `Пароль базы данных`,
      generate: `Сгенерировать`,
      veryWeak: `Очень слабый`,
      weak: `Слабый`,
      medium: `Средний`,
      strong: `Сильный`,
      veryStrong: `Очень сильный`,
      unwantedChars: `Обнаружены недопустимые символы. Избегайте использования " / \\ + & # % ? = : @ в пароле.`
    },
    step3: {
      title: `Теперь выберите имя сервера и пароль:`,
      subtitle: `Имя сервера и пароль будут использоваться для входа в админ-аккаунт.`,
      confirmPassword: `Подтвердите пароль`
    },
    finally: 'Теперь вы можете использовать EML&nbsp;AdminTool!'
  },
  auth: {
    login: `Войти`,
    register: `Регистрация`,
    confirmPassword: `Подтвердите пароль`,
    createAccount: `Создать аккаунт.`,
    logInHere: `Войти здесь.`,
    pin: `PIN`
  },
  leftPanel: {
    settings: `Настройки`,
    profiles: `Профили`,
    features: `Функции`,
    logout: `Выйти`
  },
  dashboard: {
    welcome: `Добро пожаловать, {{username}}!`,
    time: `Время сервера`,
    serverStatus: `Статус сервера`,
    undefinedServer: `Информация о сервере Minecraft не задана.`,
    launcherStatus: `Статус лаунчера`,
    news: `Новости`,
    noNews: `Новостей пока нет.`,
    emlatSettings: {
      title: `Настройки EML AdminTool`,
      info: {
        title: `Информация`,
        atName: `Название AdminTool`,
        language: `Язык`,
        pin: `PIN`,
        nbUsers: `Количество пользователей`,
        modal: {
          title: `Редактировать информацию EML AdminTool`,
          atName: `Название AdminTool`,
          nameWarn: `Изменение названия EML AdminTool также изменит имя пользователя!`,
          language: `Язык`,
          pin: `PIN`,
          regeneratePin: `Сгенерировать PIN заново`
        }
      },
      userManagement: {
        title: `Управление пользователями`,
        users: `Пользователи`,
        pendingUsers: `Ожидающие пользователи`,
        wrongPinUsers: `Пользователи с неверным PIN`,
        deletedUsers: `Удалённые пользователи`,
        infoOf: `Информация пользователя {{username}}`,
        permissions: `Права доступа`,
        refuseUser: `Отклонить пользователя`,
        refuseUserWarning: `Вы уверены, что хотите отклонить этого пользователя? Он больше не сможет использовать EML AdminTool.`,
        deleteUserWarning: `Вы уверены, что хотите удалить этого пользователя?
Пользователь больше не сможет использовать EML AdminTool. Однако его действия и данные не будут удалены.`,
        deleteUserForeverWarning: `Вы уверены, что хотите удалить этого пользователя навсегда?
Все его действия и данные будут удалены, включая опубликованные новости. Это действие необратимо.`,
        modal: {
          title: `Редактировать информацию пользователя`,
          acceptUser: `Принять пользователя`,
          permissions: `Права доступа`
        }
      },
      profileManagement: {
        title: `Управление профилями`,
        profiles: `Профили`,
        defaultProfile: `Основной профиль`,
        profileName: `Название профиля`,
        profileSlug: `ID профиля`,
        ip: `IP-адрес`,
        port: `Порт`,
        minecraftVersion: `Версия Minecraft`,
        modal: {
          title: `Редактировать профиль`,
          addProfile: `Добавить профиль`,
          profileName: `Название профиля`,
          profileSlug: `ID профиля`,
          ip: `IP-адрес или домен`,
          port: `Порт`,
          minecraftVersion: `Версия Minecraft`,
          minecraftVersionInfo: `Если ваш сервер поддерживает несколько версий Minecraft, выбирайте самую высокую совместимую версию.`
        }
      },
      update: {
        title: `Обновление`,
        currentVersion: `Текущая версия`,
        latestVersion: `Последняя версия`,
        releasedOn: `Выпущено {{date}}`,
        openGithub: `Открыть GitHub`,
        runUpdate: `Запустить обновление`
      },
      vpsAndDockerInfo: {
        title: `Информация о VPS и Docker`,
        dockerInfo: `Информация Docker`,
        storage: `Хранилище`
      },
      dangerZone: {
        title: `Опасная зона`,
        reset: `Сбросить EML AdminTool`,
        resetEMLATWarning: `Вы уверены, что хотите сбросить EML AdminTool? Все данные будут удалены, и система вернётся к исходному состоянию. Это действие необратимо.
Также убедитесь, что никто не имеет доступа к системе во время сброса: защита в режиме установки отсутствует!`,
        areYouSure: `Вы уверены?`,
        uninstall: `Как удалить EML AdminTool?`,
        modal: {
          title: `Как правильно удалить/переустановить EML AdminTool?`,
          content: `<p>Чтобы правильно удалить EML AdminTool, выполните следующие шаги:</p>
<ol>
  <li>Если система установлена на VPS, подключитесь к серверу через SSH.</li>
  <li>Перейдите в директорию конфигурации (~/.eml/admintool).</li>
  <li>Удалите контейнеры командой <code>docker compose -f docker-compose.prod.yml down --rmi all -v</code>.</li>
  <li>Удалите конфигурацию командой <code>rm -rf ~/.eml</code>.</li>
</ol>
<p>После этого EML AdminTool будет полностью удалён. Затем его можно установить заново по <a href="https://emlproject.com/docs/install-eml-admintool" target="_blank">инструкции</a>.</p>`
        }
      }
    },
    profiles: {
      title: `Профили`,
      profileManagement: {
        title: `Управление профилями`,
        profiles: `Профили`,
        addProfile: `Добавить профиль`,
        defaultProfile: `Основной профиль`,
        profileName: `Название профиля`,
        profileSlug: `ID профиля`,
        ip: `IP-адрес`,
        port: `Порт`,
        minecraftVersion: `Версия Minecraft`,
        modal: {
          title: `Редактировать профиль`,
          addProfile: `Добавить профиль`,
          profileName: `Название профиля`,
          profileSlug: `ID профиля`,
          ip: `IP-адрес или домен`,
          port: `Порт`,
          minecraftVersion: `Версия Minecraft`,
          minecraftVersionInfo: `Если ваш сервер поддерживает несколько версий Minecraft, выбирайте самую высокую совместимую версию.`
        }
      }
    },
    account: {
      title: `Настройки аккаунта`,
      info: {
        title: `Информация об аккаунте`,
        accountType: `Тип аккаунта`,
        modal: {
          title: `Редактировать аккаунт`,
          usernameWarn: `Изменение имени пользователя также изменит название EML AdminTool!`,
          leaveBlankPassword: `Оставьте пустым, если не хотите менять пароль.`,
          newPassword: `Новый пароль`,
          confirmPassword: `Подтвердите пароль`
        }
      },
      permissions: {
        title: `Права доступа`
      },
      dangerZone: {
        title: `Опасная зона`,
        deleteAccount: `Удалить аккаунт`,
        deleteAccountWarning: `Вы уверены, что хотите удалить аккаунт? Вы больше не сможете использовать EML AdminTool. Однако ваши данные не будут удалены.`
      }
    },
    filesUpdater: {
      fileName: `Имя файла`,
      size: `Размер`,
      b: `Б`
    }
  }
}
