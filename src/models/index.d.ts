import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerMemo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Memo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly noteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMemo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Memo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly noteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Memo = LazyLoading extends LazyLoadingDisabled ? EagerMemo : LazyMemo

export declare const Memo: (new (init: ModelInit<Memo>) => Memo) & {
  copyOf(source: Memo, mutator: (draft: MutableModel<Memo>) => MutableModel<Memo> | void): Memo;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly Memos?: (Memo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly Memos: AsyncCollection<Memo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}