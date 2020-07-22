class BaseModel {
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errno = 0
    }

}
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errno = -1
    }
}

class RankModel01 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.rankno = 1
    }
}
class RankModel02 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.rankno = 2
    }
}
class RankModel03 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.rankno = 3
    }
}
class RankModel04 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.rankno = 4
    }
}

class RankModel05 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.rankno = 5
    }
}

class MajorModel01 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.majorno = 10
    }
}

class MajorModel02 extends SuccessModel {
    constructor(data, message) {
        super(data, message)
        this.majorno = 11
    }
}


module.exports = {
    SuccessModel,
    ErrorModel,
    RankModel01,
    RankModel02,
    RankModel03,
    RankModel04,
    RankModel05,
    MajorModel01,
    MajorModel02
}