class RevquixException extends Error {
    readonly code: string;
    readonly timestamp: number;
    readonly environment: string;
    readonly context?: Record<string, any>;

    constructor(errorConstant: { message: string; code: string }, options?: {
        cause?: Error;
        context?: Record<string, any>;
    }) {
        super(errorConstant.message, { cause: options?.cause });

        // Validate required fields
        if (!errorConstant.code || !errorConstant.message) {
            throw new Error('RevquixException requires valid error constant with message and code');
        }

        this.code = errorConstant.code;
        this.name = this.constructor.name;
        this.timestamp = Date.now();
        this.environment = process.env.NODE_ENV || 'unknown';
        this.context = options?.context;

        // Ensure proper prototype chain
        Object.setPrototypeOf(this, new.target.prototype);

        // Capture stack trace if available
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            timestamp: this.timestamp,
            environment: this.environment,
            context: this.context,
            stack: this.stack
        };
    }
}

export default RevquixException;
