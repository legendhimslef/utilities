import type { Awaitable } from '../common/utils';
import { none, type None } from '../Option/None';
import { some, type Some } from '../Option/Some';
import type { Result } from '../Result';
import type { IResult } from './IResult';
import type { Ok } from './Ok';
import { ResultError } from './ResultError';

export class Err<E> implements IResult<any, E> {
	private readonly error: E;

	public constructor(error: E) {
		this.error = error;
	}

	public isOk(): false {
		return false;
	}

	public isOkAnd(cb?: (value: never) => boolean): false;
	public isOkAnd(): false {
		return false;
	}

	public isErr(): this is Err<E> {
		return true;
	}

	public isErrAnd(cb: (error: E) => boolean): boolean {
		return cb(this.error);
	}

	public ok(): None {
		return none;
	}

	public err(): Some<E> {
		return some(this.error);
	}

	public map(cb?: (value: never) => unknown): this;
	public map(): this {
		return this;
	}

	public mapInto(cb: (value: never) => Result<any, any>): this;
	public mapInto(): this {
		return this;
	}

	public mapOr<U>(defaultValue: U, cb?: (value: never) => U): U;
	public mapOr<U>(defaultValue: U): U {
		return defaultValue;
	}

	public mapOrElse<U>(op: (error: E) => U, cb?: (value: never) => U): U;
	public mapOrElse<U>(op: (error: E) => U): U {
		return op(this.error);
	}

	public mapErr<F>(cb: (error: E) => F): Err<F> {
		return err(cb(this.error));
	}

	public mapErrInto<R extends Result<any, any>>(cb: (error: E) => R): R {
		return cb(this.error);
	}

	public inspect(cb?: (value: never) => void): this;
	public inspect(): this {
		return this;
	}

	public inspectAsync(cb?: (value: never) => Awaitable<unknown>): Promise<this>;
	public inspectAsync(): Promise<this> {
		return Promise.resolve(this);
	}

	public inspectErr(cb: (error: E) => void): this {
		cb(this.error);
		return this;
	}

	public async inspectErrAsync(cb: (error: E) => Awaitable<unknown>): Promise<this> {
		await cb(this.error);
		return this;
	}

	public *iter(): Generator<never> {
		// Yields no values
	}

	public expect(message: string): never {
		throw new ResultError(message, this.error);
	}

	public expectErr(message?: string): E;
	public expectErr(): E {
		return this.error;
	}

	public unwrap(): never {
		throw new ResultError('Unwrap failed', this.error);
	}

	public unwrapErr(): E {
		return this.error;
	}

	public unwrapOr<T>(defaultValue: T): T {
		return defaultValue;
	}

	public unwrapOrElse<T>(op: (error: E) => T): T {
		return op(this.error);
	}

	public unwrapRaw(): never {
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		throw this.error;
	}

	public and(result?: Result<any, E>): this;
	public and(): this {
		return this;
	}

	public andThen(cb?: (value: never) => Result<any, E>): this;
	public andThen(): this {
		return this;
	}

	public or<R extends Result<any, any>>(result: R): R {
		return result;
	}

	public orElse<R extends Result<any, any>>(cb: (error: E) => R): R {
		return cb(this.error);
	}

	public contains(value?: any): false;
	public contains(): false {
		return false;
	}

	public containsErr(error: E): boolean {
		return this.error === error;
	}

	public transpose(): Some<this> {
		return some(this);
	}

	public flatten(): this {
		return this;
	}

	public intoOkOrErr(): E {
		return this.error;
	}

	public async intoPromise(): Promise<Err<Awaited<E>>> {
		return err(await this.error);
	}

	public eq(other: Ok<any>): false;
	public eq(other: Result<any, E>): boolean;
	public eq(other: Result<any, E>): boolean {
		return other.isErrAnd((error) => this.error === error);
	}

	public ne(other: Ok<any>): true;
	public ne(other: Result<any, E>): boolean;
	public ne(other: Result<any, E>): boolean {
		return !this.eq(other);
	}

	public match<OkValue, ErrValue>(branches: { ok(value: never): OkValue; err(error: E): ErrValue }): ErrValue {
		return branches.err(this.error);
	}

	public *[Symbol.iterator](): Generator<never> {
		// Yields no values
	}
}

/**
 * Creates an Err with no error.
 * @return An erroneous Result.
 */
export function err(): Err<unknown>;

/**
 * Creates an Err.
 * @typeparam E The error's type.
 * @param x Value to use.
 * @return An erroneous Result.
 */
export function err<E>(x: E): Err<E>;
export function err<E>(x?: E): Err<unknown> {
	return new Err(x);
}
